class ShopingCartPage {
    private checkOutInProduct: string;
    private checkOutInPage: string;


    constructor() {
        this.checkOutInProduct = '[style*=\"display: block;\"] .button-container > a';
        this.checkOutInPage = '.cart_navigation.clearfix span';
    }

    public goToCheckoutInProduct(): void {
        cy.get(this.checkOutInProduct).click();
    }

    public goToCheckoutInPage(): void {
        cy.get(this.checkOutInPage).click();
    }
}
export { ShopingCartPage }
