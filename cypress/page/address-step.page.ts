class AddressStepPage {
    private proceedToCheckout: string;

    constructor() {
        this.proceedToCheckout = '.cart_navigation.clearfix span';
    }

    public goToProceedToCheckout(): void {
        cy.get(this.proceedToCheckout).click();
    }
}
export { AddressStepPage }