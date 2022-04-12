class ProductsListPage {
    private tShirtToCard: string;


    constructor() {
        this.tShirtToCard = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
    }

    public addTShirtToCart(): void {
        cy.get(this.tShirtToCard).click();
    }

}
export { ProductsListPage }
