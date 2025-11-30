import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  imports: [CommonModule],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss'
})
export class ButtonBackComponent {
  @Input() navigateTo: string = '/';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate([this.navigateTo]);
  }
}
