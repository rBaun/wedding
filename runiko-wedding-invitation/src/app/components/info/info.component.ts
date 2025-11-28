import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { AccordionCardComponent } from "./accordion-card/accordion-card.component";

@Component({
  selector: 'app-info',
  imports: [TranslocoModule, AccordionCardComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  protected expanded = new Set<string>();

  protected onAccordionClick = (accordionId: string) => {
    if (this.expanded.has(accordionId)) {
      this.expanded.delete(accordionId);
    } else {
      this.expanded.add(accordionId);
    }
  }

}
