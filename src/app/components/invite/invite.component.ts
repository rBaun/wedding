import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ButtonNextComponent } from '@components/shared/button-next/button-next.component';
import { TranslocoModule } from '@jsverse/transloco';
import { GoogleSheetsService } from '@services/google-sheets.service';
import { HouseholdService } from '@services/household.service';
import { map, switchMap } from 'rxjs';
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
    });
  }

  private checkForInvitationCode = (params: Params): void => {
    let invitationCode = params['code'] ?? null;
    if (invitationCode === null) {
      invitationCode = localStorage.getItem('invitationCode');
    } else {
      localStorage.setItem('invitationCode', invitationCode);
    }

    if (invitationCode) {
      this.householdService.getHouseholdById(invitationCode).subscribe(res => {
        this.isInvited = res.names.length > 0;
        
        if (this.isInvited) {
          this.checkForRegistration(invitationCode);
        }
      })
    }

  }

  private checkForRegistration = (invitationCode: string): void => {
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    if (isRegistered) {
      this.isRegistered = isRegistered;
      return;
    }

    this.householdService.getHouseholdById(invitationCode)
      .pipe(
        map(household => household.names),
        switchMap(names => this.googleService.read(names))
      )
      .subscribe(response => {
        if (!response.found || response.found.length === 0) {
          this.isRegistered = false;
          localStorage.removeItem('isRegistered');
          return;
        }

        this.isRegistered = response.found.length > 0 && response.notFound?.length === 0;

        if (this.isRegistered) {
          localStorage.setItem('isRegistered', 'true');
        } else {
          localStorage.removeItem('isRegistered');
        }
      });
  }

}
