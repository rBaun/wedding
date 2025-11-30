import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-button-next',
  imports: [TranslocoModule],
  templateUrl: './button-next.component.html',
  styleUrl: './button-next.component.scss'
})
export class ButtonNextComponent {
  @Input({ required: true }) label!: string;
}
