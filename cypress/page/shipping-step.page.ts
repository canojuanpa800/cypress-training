class ShippingStepPage {
    private termsOfServices: string;
    private checkoutInPage: string;
        // menuContentPage.toAgreeTermsOfService();
        // menuContentPage.goToCheckoutInPage();

    constructor() {
        this.termsOfServices = '.checkbox span';
        this.checkoutInPage = '.cart_navigation.clearfix span';
    }

    public agreeTermsOfService(): void {
        cy.get(this.termsOfServices).click();
    }

    public goToCheckoutInPage(): void {
        cy.get(this.checkoutInPage).click();
    }

}
export { ShippingStepPage }