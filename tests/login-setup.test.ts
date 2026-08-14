import { test as setup } from "../fixtures/MyFixtures";
import { test as setupA } from "../fixtures/AmazonFixtures";
import { Page,expect } from "@playwright/test";

import { commonData } from "../testData/CommonTestData.js";

// setup("authentication", async ({ page, loginPage }) => {
  
//   await loginPage.navigateToUrl("http://localhost:8889/");
//   await loginPage.fillUserName(commonData.login.userName); 
//   await loginPage.fillUserPassword(commonData.login.userPassword);
//   await loginPage.clickOnSubmit();

//   await page.context().storageState({ path:'playwright/.auth/user.json' });
// });


