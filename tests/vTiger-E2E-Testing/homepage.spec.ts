import { test,expect} from "../../src/fixtures/vTiger-fixture";
import homeData from '../test-data/homepage-data.json'with {type: 'json'} ;
import leadData from '../test-data/leadDeta.json' with {type : 'json'};
import contactsData from '../test-data/contactData.json'with {type :'json'};
import organizationData from '../test-data/organizationData.json'with {type:'json'}



test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Session Persistence validation Across Modules', async ({page,homepage,leadpage,contacts,organization}) =>{
    await homepage.navigateToLead();
    await expect(leadpage.leadTitle).toHaveText(leadData.leadData.leadText);
    await homepage.navigateToContacts();
    await expect(contacts.contactsTitle).toHaveText(contactsData.contacts.title);
    await homepage.navigateToOrganization();
    await expect(organization.organizationTitle).toHaveText(organizationData.organization.title);









    
});
