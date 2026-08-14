import { test, expect } from '@playwright/test';
import type { BrowserContext } from '@playwright/test';

test('test', async ({ page ,context}) => {
 await page.goto("https://www.naukri.com/", { waitUntil: "domcontentloaded" });

    await page.locator("#login_Layer").click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("abhijeet.kumar.qa@gmail.com");
    await page.locator("input[type='password']").fill("abhiqa");
    await page.locator("button.loginButton").click();

    await page.waitForTimeout(5000);
    await page.getByRole("button", { name: "Search jobs here" }).click();
    await page.locator("input[placeholder='Enter keyword / designation / companies']").fill("playwright automation testing engineer");
    await page.locator("#experienceDD").click();
    await page.locator("//li[@title='3 years']").click();
    await page.getByRole("button", { name: "Search" }).click();

    await page.waitForSelector("//div[@class='srp-jobtuple-wrapper']");
    const jobs =  page.locator("//div[@class='srp-jobtuple-wrapper']");

    const jobCount = await jobs.count();
    console.log( jobCount+ "  jobs found");


    for(let i =0; i<=jobCount; i++){
    const job =  page.locator("//div[@class='srp-jobtuple-wrapper']").nth(i);
           await job.scrollIntoViewIfNeeded();
      await job.waitFor({
            state: "visible"
        });
     

    // Wait for new tab BEFORE clicking
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
         job.click()
    ]);
    await newPage.waitForLoadState('domcontentloaded');
   await newPage.waitForTimeout(1000);

  const applyButton =   newPage.locator("//button[@id='apply-button']").first();

   const applyButtonVisible = await applyButton
            .isVisible()
            .catch(() => false);

        if (applyButtonVisible) {

            console.log(`Apply button found for job ${i + 1}`);

            await applyButton.click();

            console.log(`Applied to job ${i + 1}`);
   
 } else {

            console.log(
                `Job ${i + 1}: Apply on company site / Apply button unavailable`
            );
        }

        // 12. Close new tab
        await newPage.close();

        // 13. Make sure original page is still usable
        await page.bringToFront();
  
}
});