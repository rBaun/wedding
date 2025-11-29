import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RsvpCardComponent } from '@components/rsvp/rsvp-card/rsvp-card.component';
import { ButtonBackComponent } from "@components/shared/button-back/button-back.component";
import { ButtonNextComponent } from '@components/shared/button-next/button-next.component';
import { TranslocoModule } from '@jsverse/transloco';
import { RsvpInfo } from '@models/rsvp-info.model';
import { GoogleSheetsService } from '@services/google-sheets.service';
import { HouseholdService } from '@services/household.service';

@Component({
  selector: 'app-rsvp',
  imports: [TranslocoModule, RsvpCardComponent, ButtonNextComponent, ButtonBackComponent],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {

  protected rsvpInfo?: RsvpInfo;

  constructor(
    private householdService: HouseholdService,
    private router: Router,
    private googleSheets: GoogleSheetsService,
  ) {
    this.rsvpInfo = this.householdService.getRsvpInfo();
  }

  protected onSubmitClick = (): void => {
    this.googleSheets.write(this.rsvpInfo?.guests!).subscribe(_ => {
      this.router.navigateByUrl('/info');
    })
  }
}
