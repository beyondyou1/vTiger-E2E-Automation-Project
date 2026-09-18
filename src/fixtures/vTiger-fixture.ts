import { test as base, Page ,expect } from '@playwright/test';
import { LoginPage } from '../pages/vTiger-login-page';
import { Homepage } from '../pages/vTiger-homepage';
import {  LeadPage } from '../pages/vTiger-leadpage';
import { Contacts } from '../pages/vTiger-contacts';
import { Organization } from '../pages/vTiger-Organization';


type Fixtures = {
    loginPage: LoginPage;
    homepage: Homepage;
    leadpage : LeadPage;
    contacts : Contacts;
    organization : Organization;
    
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
         const loginPage = new LoginPage(page);
         await use(loginPage);
    },
    homepage: async ({ page }, use) => {
         const homepage = new Homepage(page);
         await use(homepage);
    },

    leadpage : async ({ page },use) => {
        const leadpage = new LeadPage(page);
        await use(leadpage);

    },


    contacts : async ({page},use) =>{
        const contacts = new Contacts(page);
        await use(contacts);


    },

    organization : async ({page},use)=>{
        const organization = new Organization(page);
        await use(organization);


    }



});
export { expect };