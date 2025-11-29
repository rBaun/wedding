import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ButtonNextComponent } from '@components/shared/button-next/button-next.component';
import { TranslocoModule } from '@jsverse/transloco';
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
  ) { }

  protected onRsvpButtonClick = (): void => {
    this.router.navigateByUrl('/rsvp');
  }

  protected onInfoButtonClick = (): void => {
    this.router.navigateByUrl('/info');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.checkForInvitationCode(params));
  }

  private checkForInvitationCode = (params: Params): void => {
    let invitationCode = params['code'] ?? null;
    if (invitationCode === null) {
      invitationCode = localStorage.getItem('invitationCode');
    } else {
      localStorage.setItem('invitationCode', invitationCode);
    }

    this.isInvited = !!invitationCode;
    this.isRegistered = localStorage.getItem('hasRegistered') === 'true';
  }

}
