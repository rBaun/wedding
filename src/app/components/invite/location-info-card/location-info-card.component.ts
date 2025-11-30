import { Component, Input } from '@angular/core';
import { VenueInfo } from '@models/venue-info.model';

@Component({
  selector: 'app-location-info-card',
  imports: [],
  templateUrl: './location-info-card.component.html',
  styleUrl: './location-info-card.component.scss'
})
export class LocationInfoCardComponent {
  @Input({ required: true }) venueInfo!: VenueInfo;
}
