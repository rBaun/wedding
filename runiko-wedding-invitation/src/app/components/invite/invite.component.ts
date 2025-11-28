import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params['code'] ?? null;
      if (!code) return;
      localStorage.setItem('invitationCode', code);
    })
  }

  protected onRsvpButtonClick = (): void => {
    this.router.navigateByUrl('/rsvp');
  }

}
