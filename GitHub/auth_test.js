const selectors = require('./Configs/selectors')
const config = require('./Configs/config');

Feature('Check Authorization');

Scenario('verification of authorization by e-mail and password',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField( selectors.loginInput, config.trueLogin); 
        I.fillField(selectors.passwordInput, config.truePassword);
        I.click(selectors.loginButton);
        I.waitForElement( `//span[contains(text(), '${config.trueLogin}')]` );

    });


    Scenario('Error notification when writing values ​​to opposite fields',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField( selectors.loginInput, config.truePassword); 
        I.fillField(selectors.passwordInput, config.trueLogin);
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Неверная почта")]` );

    });


    Scenario('Error notification if the login field is empty',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField(selectors.passwordInput, config.trueLogin);
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Не указан логин")]` );

    });


    
    Scenario('Error notification if password field is empty',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField( selectors.loginInput, config.trueLogin); 
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Не указан логин")]` );

    });


    Scenario('Error notification if fields are empty',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Не указан логин")]` );

    });

    Scenario('Error notification if login field is incorrect',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField( selectors.loginInput, config.generateRandomPasswordOrLogin()); 
        I.fillField(selectors.passwordInput, config.truePassword);
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Неверная почта")]` );

    });


    Scenario('Error notification if password field is incorrect',  ({ I }) => {
        I.amOnPage('/buy/domain');
        I.click(selectors.authButton);
        I.fillField( selectors.loginInput, config.trueLogin); 
        I.fillField(selectors.passwordInput, config.generateRandomPasswordOrLogin());
        I.click(selectors.loginButton);
        I.waitForElement( `//div[@class="login__alert"]//*[contains(text(), "Неверная почта")]` );

    });
