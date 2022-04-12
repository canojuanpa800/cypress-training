class PaymentStepPage {
    private bankwire: string;
    private confirmButton: string;
    private textOrdenIsComplete: string;
    private messageOfSuccess: string;

    constructor() {
        this.bankwire = ".bankwire"
        this.confirmButton = "#center_column > form > p > button span"
        this.textOrdenIsComplete = "#center_column > div > p > strong"
        this.messageOfSuccess = "Your order on My Store is complete."
    }

    public selectBankWirePayMethod(): void {
        cy.get(this.bankwire).click();
    }

    public confirmPage(): void {
        cy.get(this.confirmButton).click();
    }

    public checkTextOrderComplete(): void {
        cy.get(this.textOrdenIsComplete).should("have.text", this.messageOfSuccess);
    }

}
export { PaymentStepPage }