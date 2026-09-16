import  { Page ,Locator,Expect, expect}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';

export class HomePageAmazon extends Wrapper{

readonly page:Page;
readonly companyLogo:Locator;

constructor(page:Page){
super(page);
this.page= page;

this.companyLogo= page.locator("#nav-logo-sprites");


}

async navigatToAmazone(url :string){
   await this.page.goto(url);
   await this.page.waitForLoadState('load');
}


}
