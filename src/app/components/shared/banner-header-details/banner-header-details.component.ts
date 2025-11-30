import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-header-details',
  imports: [],
  templateUrl: './banner-header-details.component.html',
  styleUrl: './banner-header-details.component.scss'
})
export class BannerHeaderDetailsComponent {

  constructor(
    private router: Router
  ) { }

  protected onPortraitImageClick = (): void => {
    this.goToHomePage();
  };

  protected onTitleClick = (): void => {
    this.goToHomePage();
  }

  private goToHomePage = (): Promise<boolean> => this.router.navigateByUrl('invite');

}
