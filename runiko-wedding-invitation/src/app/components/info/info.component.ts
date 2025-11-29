import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccordionCardComponent } from "./accordion-card/accordion-card.component";

@Component({
  selector: 'app-info',
  imports: [TranslocoModule, AccordionCardComponent, ClipboardModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  private readonly clipboard = inject(Clipboard);
  private readonly translocoService = inject(TranslocoService);

  protected onCopyDiscountCode = () => {
    const discountCode = this.translocoService.translate('pages.info.topics.booking.expanded.discountCode');
    this.clipboard.copy(discountCode);
    window.open('https://scheelsminde.dk/vaerelser/', '_blank')?.focus();
  }
}
