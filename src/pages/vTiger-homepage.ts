import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';


export class Homepage extends Wrapper{

    readonly page : Page;
    readonly homeTitle : Locator;


    constructor(page : Page){
         super(page);
         this.page = page;
         this.homeTitle = page.locator("//a[contains(text(),'Home')]");

    }

    

















}
