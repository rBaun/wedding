import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusySpinnerComponent } from "@components/shared/busy-spinner/busy-spinner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusySpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Runiko Bryllup - 09.05.2026';

}
