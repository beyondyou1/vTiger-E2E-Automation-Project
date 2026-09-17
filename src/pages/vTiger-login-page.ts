import  { Page ,Locator}from '@playwright/test'
import { Wrapper } from '../utils/web-utils';

export class LoginPage extends Wrapper{

    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly submitButton : Locator ;
    readonly errorMSG : Locator ;


    constructor(page : Page){
         super(page);
         this.page = page;
         this.username = page.locator("//input[@name='user_name']");
         this.password = page.locator("//input[@name='user_password']");
         this.submitButton = page.locator("//input[@id='submitButton']");
         this.errorMSG =    page.locator("//div[@class='errorMessage']");

    }

    async navigateToURL(){
         await this.page.goto("http://localhost:8889/",{waitUntil : 'domcontentloaded'});
    }
    async fillUsername(username : string){
        await this.username.fill(username);
    }

    async fillPassword(password : string ){
        await this.password.fill(password);

    }

    async clickOnSubmitButton(){
        await this.submitButton.click();

    }












}