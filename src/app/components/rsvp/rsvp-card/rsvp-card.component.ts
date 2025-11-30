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
  @Input() allowPlusOne = false;

  protected onDietaryPreferenceChange(preference: 'vegan' | 'vegetarian' | 'pescetarian'): void {
    if (this.guest.dietaryPreference === preference) {
      this.guest.dietaryPreference = null;
    } else {
      this.guest.dietaryPreference = preference;
    }
  }

  protected onAttendanceChange(): void {
    this.guest.isAttending = !this.guest.isAttending;
  }

  protected onPlusOneChange(): void {
    this.guest.plusOne = !this.guest.plusOne;
  }

  protected onNotesChange(event: Event): void {
    this.guest.notes = (event.target as HTMLTextAreaElement).value;
  }
}
