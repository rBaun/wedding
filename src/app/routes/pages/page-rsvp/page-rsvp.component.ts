import { Component } from '@angular/core';
import { RsvpComponent } from '@components/rsvp';
import { BannerHeaderDetailsComponent } from "@components/shared/banner-header-details/banner-header-details.component";

@Component({
  selector: 'app-page-rsvp',
  imports: [RsvpComponent, BannerHeaderDetailsComponent],
  templateUrl: './page-rsvp.component.html',
  styleUrl: './page-rsvp.component.scss'
})
export class PageRsvpComponent {

}
