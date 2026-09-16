import{test as base ,Page} from '@playwright/test'
import { HomePageAmazon } from '../pages/amazon-homepage';

export  type costumFixtures = {
  homePageAmazon : HomePageAmazon;

}

export const test = base.extend<costumFixtures>({
    homePageAmazon : async({page},use)=>{
    const homePageAmazonObj : HomePageAmazon =  new HomePageAmazon(page);
     await use(homePageAmazonObj);

    }

})
