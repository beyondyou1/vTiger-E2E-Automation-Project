import { HomePage } from "../pages/commonPages/HomePage";
import { LoginPage } from "../pages/commonPages/LoginPage";
import { expect, Page } from "@playwright/test";
import{LeadsDetails}from "../pages/leadModulePages/leadsDetailsPage"
import { LeadCreation } from "../pages/leadModulePages/leadsCreationPage";
import { Contact } from "../pages//contactModulePages/contactPage";
import { commonData } from "../testData/CommonTestData.js";
import { testData } from "../testData/TestData.js";
import loginData from "../testData/LoginData.json" with {type : 'json'};
import { test } from "../fixtures/MyFixtures";

// let homePage : HomePage  ;
// let leadDetail : LeadsDetail;
// let leadCreate : LeadCreation; 

async function createLeadFlow(page : Page,loginPage : LoginPage,homePage : HomePage,leadDetail : LeadsDetails,leadCreate : LeadCreation){
 //const loginPage: LoginPage  = new LoginPage(page);
    await loginPage.navigateToUrl("http://localhost:8889/");
    await loginPage.fillUserName(commonData.login.userName);
    await loginPage.fillUserPassword(commonData.login.userPassword);
    await loginPage.clickOnSubmit();
   // homePage  =  new HomePage(page);
    await homePage.navigateToLead();
   // leadDetail  =  new LeadsDetails(page);
    await leadDetail.navigateToLeadCreationPage();
   // leadCreate =  new LeadCreation(page);
    await leadCreate.fillFirstName(testData.vt001.firstName);
    await leadCreate.fillLastName(testData.vt001.lastName);
    await leadCreate.fillCompanyName(testData.vt001.companyName);
    await leadCreate.saveLead();

}

test.describe('verify login @smoke',()=>{
 
 loginData.forEach((data)=>{
test(`verify login-${data.label}`,async({page,homePage,loginPage})=>{
 //const loginPage: LoginPage  = new LoginPage(page);
    await loginPage.navigateToUrl("http://localhost:8889/");
    await loginPage.fillUserName(data.username);
    await loginPage.fillUserPassword(data.password);
    await loginPage.clickOnSubmit();  
    if(data.status=="valid"){
   await expect(page).toHaveTitle(" Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
    }else{
      await expect(loginPage.userName).toBeVisible();  
    }

});
 });
});



test("vt001 Verify Lead Creation", async ({ page ,homePage,leadDetails ,loginPage,leadCreate}) => {
    await createLeadFlow(page,loginPage,homePage ,leadDetails,leadCreate);
   // await page.pause();
  //  await expect(page).toHaveTitle( "Administrator - Leads - vtiger CRM 5 - Commercial Open Source CRM");
  //  await expect(leadCreate.leadCreationTitle).toHaveText("Creating New Lead");
    await expect(leadDetails.firstNameText).toHaveText(testData.vt001.firstName);
    await expect(leadDetails.lastNameText).toHaveText(testData.vt001.lastName);
    await expect(leadDetails.companyNameText).toHaveText(testData.vt001.companyName);
    await homePage.logOut();
   
});


test("complex test scenerios",async ({page,homePage,leadDetails ,loginPage,leadCreate})=>{
    await createLeadFlow(page,loginPage,homePage ,leadDetails,leadCreate);
// const homePage : HomePage  =  new HomePage(page);
 await homePage.homePageScreenshot();
 await homePage.fetchAndPrintPageTitle();
 await homePage.scrollToEndOfPage();
 await page.waitForTimeout(2000);
 await homePage.scrollToContact();
 await homePage.navigateToContact();
 const contact : Contact = new Contact(page);
 await contact.getAllLinksOfContact();

});





