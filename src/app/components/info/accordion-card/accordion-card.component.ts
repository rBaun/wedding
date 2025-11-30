import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  imports: [],
  templateUrl: './accordion-card.component.html',
  styleUrl: './accordion-card.component.scss'
})
export class AccordionCardComponent {

  protected expanded: boolean = false;

  @Input({ required: true }) title!: string;

  protected onAccordionClick = (): void => {
    this.expanded = !this.expanded;
  }

}
