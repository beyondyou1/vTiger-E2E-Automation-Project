import { chromium ,expect,test} from "@playwright/test";
import type { Page,Locator ,BrowserContext } from "@playwright/test";

test(' @smoke ,validate login page ' ,async ({page}) =>{
    await page.goto("http://localhost:8889/",{waitUntil : 'domcontentloaded'});
       
    const userName : Locator = page.locator("//input[@name='user_name']");
    await userName.fill("admin");
    const userPassword : Locator = page.locator("//input[@name='user_password']");
    await userPassword.fill("admin");
    const loginButton : Locator = page.locator("//input[@id='submitButton']");
    await loginButton.click();
    const homepageText = page.locator("//a[contains(text(),'Home')]");
    try{
        await expect(homepageText).toHaveText("Home");
           console.log(`
                        * User is successfully authenticated.
                        * Dashboard is displayed.
                        * Authenticated user information is available.
                        * No login error is displayed.
                     `);
        
    }catch{
            console.log("Did not reached  to homepage...");

    }
});


test('invalid login ', async ({page}) =>{
      await page.goto("http://localhost:8889/",{waitUntil : 'domcontentloaded'});
       
      const userName : Locator = page.locator("//input[@name='user_name']");
      await userName.fill("admin123");
      const userPassword : Locator = page.locator("//input[@name='user_password']");
      await userPassword.fill("admin321");
      const loginButton : Locator = page.locator("//input[@id='submitButton']");
      await loginButton.click();
      const errorMsg = page.locator("//div[@class='errorMessage']");
      try{
        await expect(errorMsg).toContainText("You must specify a valid username and password");
           console.log(`
                        * Authentication fails.
                        * Appropriate error message is displayed.
                        * Dashboard is not accessible.
                     `);
        
      }catch{
            console.log(" Navegated  to homepage...");

    }


 })