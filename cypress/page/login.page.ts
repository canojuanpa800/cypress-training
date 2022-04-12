class LoginPage {
    private emailField: string;
    private passwordField: string;
    private email: string;
    private password: string;
    private buttonSignIn: string;

    constructor() {
        this.emailField = '#email';
        this.passwordField = '#passwd';
        this.email = 'aperdomobo@gmail.com';
        this.password = 'WorkshopProtractor';
        this.buttonSignIn = '#login_form .submit span';
    }
    public logIn(): void {
        this.writeEmail();
        this.writePassword();
        this.pressSignIn();
    }

    public writeEmail(): void {
        cy.get(this.emailField).type(this.email);
    }

    public writePassword(): void {
        cy.get(this.passwordField).type(this.password);
    }

    public pressSignIn(): void{
        cy.get(this.buttonSignIn).click();
    }
}
export { LoginPage }