import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingService } from '@services/loading.service';

@Component({
  selector: 'app-busy-spinner',
  imports: [CommonModule],
  templateUrl: './busy-spinner.component.html',
  styleUrl: './busy-spinner.component.scss'
})
export class BusySpinnerComponent {
  constructor(protected loadingService: LoadingService) { }
}
