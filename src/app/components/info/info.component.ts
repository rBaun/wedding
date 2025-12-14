import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { AccordionCardComponent } from "./accordion-card/accordion-card.component";

@Component({
  selector: 'app-info',
  imports: [TranslocoModule, AccordionCardComponent, ClipboardModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  private readonly clipboard = inject(Clipboard);

  protected onCopyDiscountCode = () => {
    this.clipboard.copy('guestbryllup');
    window.open('https://scheelsminde.dk/vaerelser/', '_blank')?.focus();
  }
}
