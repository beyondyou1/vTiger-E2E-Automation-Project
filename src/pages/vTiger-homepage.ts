import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';


export class Homepage extends Wrapper{

    readonly page : Page;
    readonly homeTitle : Locator;
    readonly leadButton : Locator;
    readonly orgnizationButton : Locator;
    readonly contactsButton : Locator ;



    constructor(page : Page){
         super(page);
         this.page = page;
         this.homeTitle = page.locator("//a[contains(text(),'Home')]");
         this.leadButton = page.locator("//td[@class='tabUnSelected']//a[text()='Leads']");
         this.orgnizationButton = page.locator("//td[@class='tabUnSelected']//a[text()='Organizations']");
         this.contactsButton = page.locator("//td[@class='tabUnSelected']//a[text()='Contacts']");

    }


    async navigateToLead(){
        await this.leadButton.click();
    }

    async navigateToContacts(){
        await this.contactsButton.click();
    }

    async navigateToOrganization(){
        await this.orgnizationButton.click();
    }


    

















}
