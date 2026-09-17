import { test as base, Page ,expect } from '@playwright/test';
import { LoginPage } from '../pages/vTiger-login-page';
import { Homepage } from '../pages/vTiger-homepage';


type Fixtures = {
    loginPage: LoginPage;
    homepage: Homepage;
    
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
         const loginPage = new LoginPage(page);
         await use(loginPage);
    },
    homepage: async ({ page }, use) => {
         const homepage = new Homepage(page);
         await use(homepage);
    }

});
export { expect };