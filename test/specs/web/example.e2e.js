import HomePage from '../../pageobjects/web/home.page';
describe('My Login application', () => {
    it('It should login with valid credentials', async () => {
        await HomePage.open("clips");
        await expect(HomePage.prevBigCarouselButton).toBeCalled();
        await expect(HomePage.iconProfileLogin).toBeExisting();
        await HomePage.iconProfileLogin.click();
        await expect(HomePage.loginWithEmailButton).toBeExisting();
        await HomePage.loginWithEmailButton.click();
        await HomePage.emailInput.setValue('gelasbeling@gmail.com');
        await HomePage.passwordInput.setValue('Qwerty12#');
        await HomePage.loginSubmitButton.click();
        await HomePage.iconProfileLogged.waitForExist();
        await HomePage.iconProfileLogged.click();
        await browser.pause(5000);
    });
});