import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RsvpCardComponent } from '@components/rsvp/rsvp-card/rsvp-card.component';
import { ButtonBackComponent } from "@components/shared/button-back/button-back.component";
import { ButtonNextComponent } from '@components/shared/button-next/button-next.component';
import { TranslocoModule } from '@jsverse/transloco';
import { RsvpGuest, RsvpInfo } from '@models/rsvp-info.model';
import { GoogleSheetsService } from '@services/google-sheets.service';
import { HouseholdService } from '@services/household.service';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'app-rsvp',
  imports: [TranslocoModule, RsvpCardComponent, ButtonNextComponent, ButtonBackComponent, CommonModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {

  protected rsvpInfo?: RsvpInfo;

  constructor(
    private householdService: HouseholdService,
    private router: Router,
    private googleSheets: GoogleSheetsService,
    protected loading: LoadingService,
  ) {
    const invitationCode = localStorage.getItem('invitationCode');
    if (!invitationCode) return;

    this.householdService.getHouseholdById(invitationCode).subscribe(household => {
      this.rsvpInfo = {
        household: household,
        guests: household.names.map(name => { return { name } as RsvpGuest }),
      }
    })
  }

  protected onSubmitClick = (): void => {
    this.googleSheets.write(this.rsvpInfo?.guests!).subscribe(_ => {
      this.router.navigateByUrl('/info');
    })
  }
}
