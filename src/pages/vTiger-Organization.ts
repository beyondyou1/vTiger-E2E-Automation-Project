import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';

export class  Organization extends Wrapper{

    readonly page : Page ;
    readonly organizationTitle : Locator;


    constructor(page : Page){
        super(page);
        this.page = page;

        this.organizationTitle = page.locator("//a[text()='Organizations' and @class='hdrLink']");



    }





}