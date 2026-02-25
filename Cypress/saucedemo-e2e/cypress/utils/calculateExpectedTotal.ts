type Product = { name: string; price: number };

export const calculateExpectedTotal = (
  products: string[],
  taxRate = 0.08
): Cypress.Chainable<{
  itemTotal: number;
  tax: number;
  total: number;
}> => {
  return cy.fixture<Record<string, Product>>('products.json').then((data) => {
    const prices = products.map((key) => data[key].price);
    const itemTotal = Number(prices.reduce((sum, p) => sum + p, 0).toFixed(2));
    const tax = Number((itemTotal * taxRate).toFixed(2));
    const total = Number((itemTotal + tax).toFixed(2));

    return { itemTotal, tax, total };
  });
};
