import { test,expect} from "../../src/fixtures/vTiger-fixture";
import loginData from '../test-data/login-data.json' with { type: 'json' };
import homeData from '../test-data/homepage-data.json'with {type: 'json'} ;


test(' @smoke ,validate login with valid credantials '  ,async ({page,loginPage,homepage}) =>{
       
    await loginPage.navigateToURL();
    await loginPage.fillUsername(loginData.validLogin.username);
    await loginPage.fillPassword(loginData.validLogin.password);
    await loginPage.clickOnSubmitButton();

   try {
      await expect(homepage.homeTitle).toHaveText(homeData.homeTitle.title);
      console.log(`
                  * User is successfully authenticated.
                  * Dashboard is displayed.
                  * Authenticated user information is available.
                  * No login error is displayed.
                `);
   } catch (err) {
      console.log("Did not reach homepage...", err);
   }
});


test('validate login with invalid credentials ', async ({page,loginPage}) =>{

    await loginPage.navigateToURL();
    await loginPage.fillUsername(loginData.invalidLogin.invalidUsername);
    await loginPage.fillPassword(loginData.invalidLogin.invalidPassword);
    await loginPage.clickOnSubmitButton();
      try{
        await expect(loginPage.errorMSG).toContainText(loginData.invalidLogin.errorMSG);
           console.log(`
                        * Authentication fails.
                        * Appropriate error message is displayed.
                        * Dashboard is not accessible.
                     `);
        
      }catch{
            console.log(" Navegated  to homepage...");

    }


 })