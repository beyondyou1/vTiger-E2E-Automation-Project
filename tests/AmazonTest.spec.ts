import { expect } from "@playwright/test";
import { test } from "../fixtures/AmazonFixtures";
import { HomePageAmazon } from "../pages/amazonE2ETesting/HomePageAmazon";

test('velidate CompanyLogo-HDR-001 ',async({page,homePageAmazon})=>{

   await homePageAmazon.navigatToAmazone("https://www.amazon.in/");
   await expect(homePageAmazon.companyLogo).toBeVisible();

});


test('Validate logo redirect to home page-HDR-002',async({page})=>{



   
})



