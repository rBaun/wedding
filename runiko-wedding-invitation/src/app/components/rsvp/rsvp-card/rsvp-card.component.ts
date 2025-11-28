import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { RsvpGuest } from '@models/rsvp-info.model';

@Component({
  selector: 'app-rsvp-card',
  imports: [TranslocoModule],
  templateUrl: './rsvp-card.component.html',
  styleUrl: './rsvp-card.component.scss'
})
export class RsvpCardComponent {
  @Input({ required: true }) guest!: RsvpGuest;
}
