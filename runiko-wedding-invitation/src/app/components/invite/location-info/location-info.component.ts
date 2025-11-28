import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { VenueInfo } from '@models/venue-info.model';
import { LocationInfoCardComponent } from "../location-info-card/location-info-card.component";

@Component({
  selector: 'app-location-info',
  imports: [TranslocoModule, LocationInfoCardComponent],
  templateUrl: './location-info.component.html',
  styleUrl: './location-info.component.scss',
})
export class LocationInfoComponent {
  protected churchInfo?: VenueInfo;
  protected hotelInfo?: VenueInfo;

  constructor(private transloco: TranslocoService) {
    this.transloco.load('da-DK').subscribe(() => {
      this.churchInfo = this.getChurchInfo();
      this.hotelInfo = this.getHotelInfo();
    })
  }

  private getChurchInfo = (): VenueInfo => {
    const path = `pages.invite.invitations.church`;

    return {
      title: this.transloco.translate(`${path}.label`),
      location: {
        name: this.transloco.translate(`${path}.location.name`),
        address: this.transloco.translate(`${path}.location.address`),
      },
      event: [
        {
          label: this.transloco.translate(`${path}.time.arrival.label`),
          startTime: this.transloco.translate(`${path}.time.arrival.start`),
        },
        {
          label: this.transloco.translate(`${path}.time.ceremony.label`),
          startTime: this.transloco.translate(`${path}.time.ceremony.start`),
        },
      ],
    };
  };

  private getHotelInfo = (): VenueInfo => {
    const path = `pages.invite.invitations.hotel`;

    return {
      title: this.transloco.translate(`${path}.label`),
      location: {
        name: this.transloco.translate(`${path}.location.name`),
        address: this.transloco.translate(`${path}.location.address`),
      },
      event: [
        {
          label: this.transloco.translate(`${path}.time.reception.label`),
          startTime: this.transloco.translate(`${path}.time.reception.start`),
          endTime: this.transloco.translate(`${path}.time.reception.end`),
        },
        {
          label: this.transloco.translate(`${path}.time.party.label`),
          startTime: this.transloco.translate(`${path}.time.party.start`),
          endTime: this.transloco.translate(`${path}.time.party.end`),
        },
      ],
    };
  };
}
