import { Component } from '@angular/core';
import { InfoComponent } from '@components/info';
import { BannerHeaderDetailsComponent } from "@components/shared/banner-header-details/banner-header-details.component";

@Component({
  selector: 'app-page-info',
  imports: [InfoComponent, BannerHeaderDetailsComponent],
  templateUrl: './page-info.component.html',
  styleUrl: './page-info.component.scss'
})
export class PageInfoComponent {

}
