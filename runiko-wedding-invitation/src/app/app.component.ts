import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusySpinnerComponent } from "@components/shared/busy-spinner/busy-spinner.component";
import { GoogleSheetsService } from '@services/google-sheets.service';
import { HouseholdService } from '@services/household.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusySpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Runiko Bryllup - 09.05.2026';

  private hasRegistered: boolean = false;
  
  constructor(
    private googleService: GoogleSheetsService,
    private householdService: HouseholdService
  ) { }

  ngOnInit(): void {
    this.hasRegistered = localStorage.getItem('hasRegistered') === 'true';
    if (this.hasRegistered) return;

    const invitationCode = localStorage.getItem('invitationCode');
    if (!invitationCode) return;

    const names: string[] = this.householdService.getRsvpInfo()?.guests.map(guest => guest.name) ?? [];
    if (names.length === 0) return;

    this.googleService.read(names).subscribe(response => {
      this.hasRegistered = !!response.found;
      localStorage.setItem('hasRegistered', this.hasRegistered ? 'true' : 'false');
    })
  }

}
