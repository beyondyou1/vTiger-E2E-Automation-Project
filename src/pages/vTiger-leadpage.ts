import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';

export class LeadPage extends Wrapper{

    readonly page : Page;
    readonly leadTitle : Locator;


    constructor(page :Page){
        super(page);
        this.page = page;
        
        this.leadTitle = page.locator("//a[text()='Leads'and @class='hdrLink']");




    }

    






}