import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ButtonNextComponent } from '@components/shared/button-next/button-next.component';
import { TranslocoModule } from '@jsverse/transloco';
import { GoogleSheetsService } from '@services/google-sheets.service';
import { HouseholdService } from '@services/household.service';
import { ImagePortraitComponent } from './image-portrait/image-portrait.component';
import { LocationInfoComponent } from './location-info/location-info.component';

@Component({
  selector: 'app-invite',
  imports: [TranslocoModule, ImagePortraitComponent, LocationInfoComponent, ButtonNextComponent],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss',
})
export class InviteComponent implements OnInit {
  
  protected isInvited: boolean = false;
  protected isRegistered: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private googleService: GoogleSheetsService,
    private householdService: HouseholdService,
  ) {
  }

  protected onRsvpButtonClick = (): void => {
    this.router.navigateByUrl('/rsvp');
  }

  protected onInfoButtonClick = (): void => {
    this.router.navigateByUrl('/info');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.checkForInvitationCode(params);
      this.checkForRegistration();
    });
  }

  private checkForInvitationCode = (params: Params): void => {
    let invitationCode = params['code'] ?? null;
    if (invitationCode === null) {
      invitationCode = localStorage.getItem('invitationCode');
    } else {
      localStorage.setItem('invitationCode', invitationCode);
    }

    this.isInvited = !!invitationCode;
  }

  private checkForRegistration = (): void => {
    if (!this.isInvited) return;
    if (this.isRegistered) return;

    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    if (isRegistered) {
      this.isRegistered = isRegistered;
      return;
    }

    const names: string[] = this.householdService.getRsvpInfo()?.guests.map(guest => guest.name) ?? [];
    this.googleService.read(names).subscribe(response => {
      this.isRegistered = !!response.found;
      localStorage.setItem('isRegistered', 'true');
    })
  }

}
