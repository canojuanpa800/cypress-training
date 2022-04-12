import {
  MenuContentPage, ProductsListPage,
  ShopingCartPage, LoginPage,
  AddressStepPage, ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirtToCart();

    shopingCartPage.goToCheckoutInProduct();
    shopingCartPage.goToCheckoutInPage();

    loginPage.logIn();

    addressStepPage.goToProceedToCheckout();

    shippingStepPage.agreeTermsOfService();
    shippingStepPage.goToCheckoutInPage();

    paymentStepPage.selectBankWirePayMethod();
    paymentStepPage.confirmPage();
    paymentStepPage.checkTextOrderComplete();
  });
});
