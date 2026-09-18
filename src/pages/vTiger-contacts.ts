import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';

export class Contacts extends Wrapper{

    readonly page : Page;
    readonly contactsTitle : Locator;


    constructor(page : Page){
        super(page);
        this.page = page;

        this.contactsTitle = page.locator("//a[text()='Contacts' and @class='hdrLink']");
    }



}