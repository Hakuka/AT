import { calculateExpectedTotal } from '../utils/calculateExpectedTotal';
import { verifyItemToBuy, verifyNumberOfItems } from '../utils/itemHelpers';

export class CheckoutOverviewPage {
  verifyPriceTotal(selectedProducts: string[]) {
    calculateExpectedTotal(selectedProducts).then(({ itemTotal, tax, total }) => {
      cy.get('.summary_info .summary_subtotal_label')
        .contains('Item total:')
        .should('contain', `$${itemTotal.toFixed(2)}`);
      cy.get('.summary_info .summary_tax_label')
        .contains('Tax:')
        .should('contain', `$${tax.toFixed(2)}`);
      cy.get('.summary_info .summary_total_label')
        .contains('Total:')
        .should('contain', `$${total.toFixed(2)}`);
    });
  }

  verifyItemToBuy(itemKey: string) {
    verifyItemToBuy(itemKey);
  }
  verifyNumberOfItems(itemNumber: number) {
    verifyNumberOfItems(itemNumber);
  }
}
