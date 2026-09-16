import { chromium, Locator,Page,BrowserContext, FrameLocator, Frame,Browser,firefox,webkit, FileChooser} from "playwright";

export class Wrapper {
      browser!: Browser;
    context!: BrowserContext;
    page!: Page;
     
    constructor(page : Page){
      this.page = page ;
    }





    /**
     * This method is used to fetch input value
     * 
     * @param - locator
     */
  async getInputValue(locator:Locator):Promise<string>{
  return   await locator.inputValue();

  }
   
  /**
   * this method is used for uploading the file
   * 
   * @param element 
   * @param path 
   */

  async uploadFile(element : Locator,path :string ){
  await element.setInputFiles(path);
  }


  /**
   * this method is used for removingFiles 
   * 
   * @param element 
   * 
   */

  async removeFiles(element : Locator){
  await element.setInputFiles([]);
  }


   /**
   * this method is used for uploading multiple  files
   * 
   * @param element 
   * @param path 
   */

  async uploadingMultipleFiles(element: Locator, path: string[]) {
    await element.setInputFiles(path);
}
/**
 * This method is used to upload the file with click and upload feature 
 * 
 * @param element 
 * @param path 
 */

 async clickAndUploadFile(element : Locator,path : string ){
 let [fileChooser] = await Promise.all([
 this.page.waitForEvent('filechooser'),
 element.click(),
 ]);
 await fileChooser.setFiles(path);

}

/**
 * This method is used to download file 
 * 
 * @param element 
 * @param path 
 */
  async downloadFile(element : Locator ,downloadPath : string){
  const [download] = await Promise.all([
  this.page.waitForEvent('download'),
  element.click(),
  ]);
  await download.saveAs(downloadPath);
  }


    /** This method is used to click on the element
     * 
     * @param locator
     * 
     */
    async click(locator : Locator){
    await locator.click();
     }




     /**This method is used to fill the value in input feild or textarea
      * 
      * @param element 
      * @param value - is string 
      */
    async fill(element :Locator, value : string){
    await element.fill(value);
     }
    



     /**This method is used to get the text content of the element 
      * 
      * @param element 
      * @returns -  text Content the text   of the element  
      */
    async getText(element : Locator): Promise<string | null>{
    return await element.textContent();
     }
   



     /**This method is used to get attribute value of the element
      * 
      * @param element 
      * @param attributeName -attribute of the element
      * @returns - attribute vlue of the element
      */
    async getAtrribute(element : Locator, attributeName: string): Promise<string | null>{
    return await element.getAttribute(attributeName);
     }



     /**This method is used to get page title of the current page
      * 
      * @returns - page title in form of string  
      * 
      */
     async getTitle(): Promise<string >{
      return await this.page.title();
     }




    /**This method is used to get URL of the current page 
     *  
     * @returns -  URL of the current page
     */
    async getUrl(): Promise<string >{
    return  this.page.url();
     }



     /**This method is used to hover the cursor on the element 
      * 
      * @param element 
      */
     async hover(element:Locator){
     await element.hover();
     }


     /**This method is used to select the option by value
      * 
      * @param element 
      * @param value 
      */
    async selectOption(element: Locator, value: string ){
    await element.selectOption({value: value});
     }
    



    /**This method is used to select the option by its visible text(Label)
     * 
     * @param element 
     * @param label 
     */
     async selectByLabel(element : Locator, label : string ){
     await element.selectOption({label:label});




     /**This method is used to grag the element to the targeted place
      * 
      * @param source 
      * @param target
      * 
      */
     }
    async dragAndDrop(source: Locator, target: Locator){
    await source.dragTo(target)
     }




     /**This methos is used to scroll down to the element if needed 
      * 
      * @param element 
      * 
      */
   async scrollIntoViewIfNeeded(element: Locator) {
    await element.scrollIntoViewIfNeeded();
}
    




/**This method is used to get the new page matched by the title
 * 
 * @param title 
 * @param context 
 * @returns - page object which matched by the title
 */
   async windowHandle(title: string): Promise<Page | undefined> {

  for (const page of this.context.pages()) {
    if ((await page.title()).includes(title)) {
      await page.bringToFront();
      return page;
    }
  }
  return undefined;
}
    




    /**
     * This method is used to find the element of  inside the Frame
     * 
     * @param page 
     * @param frameLocator 
     * @returns - frameLocator object to perform actions
     */
    async switchToFrame( frameLocator : string ): Promise<FrameLocator>{
    return  this.page.frameLocator(frameLocator);
    }
    




/**
 * This method is used to locate nasted frameElement 
 * 
 * @param parantFrame 
 * @param childFrame 
 * @returns - framelocator
 */
   async  switchToNastedFrame(parantFrame : string ,childFrame : string ):Promise<FrameLocator>{
   return this.page.frameLocator(parantFrame)
   .frameLocator(childFrame);
   }





   /**
    * This method is used to locate element in main frame
    * @returns-  Frame
    */
    async mainFrame():Promise<Frame>{
    return  this.page.mainFrame();
    }

   

    
    
    

     /**
      * This method is used to take screenshot of full page 
      * @param path 
      */
     async screenShot(path :string ){
     await this.page.screenshot({ fullPage:true,
        path : path
      })
       console.log("Screenshot Saved");
     }






     /**
      * This method is used to accept and dissmiss the popup of javaScript 
      * 
      * 
      * @param action 
      * @param text 
      */
     async handlePopup(action: 'accept' | 'dismiss', text?: string): Promise<void> {
        this.page.once('dialog', async dialog => {
            console.log(`Popup Message: ${dialog.message()}`);

            if (action === 'accept') {
                await dialog.accept(text);
            } else {
                await dialog.dismiss();
            }
        });
    }



 



/**
 *This method is used to refresh  page 
 * 
 */
    async refressPage(){
      await this.page.reload();
    }



    

    /**
     * This method is used for doubble click on the element 
     * 
     * @param element 
     */
    async doubbleClick(element : Locator){
      await element.dblclick();
    }







    /**
     * This method is used to right click on the element
     * @param element 
     */
  async rightClick(element : Locator ){

  await element.click({button:"right"});

  }






/**
 * This method is used to go back on page
 */
  async goBack(){
    await this.page.goBack();
  }





 /**
  * This method is used to go forward on the page
  */
  async goForward(){
  await this.page.goForward();
  }






  /**This method is used to wait for the element to be visible
   * 
   * @param locator 
   */
    async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
}
 




/**
 * This method is used to scroll to bottom of  page
 */
async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}


  

/**
 * This method is used to scroll to element
 * 
 * @param locator 
 */
async scrollToElement(locator: Locator): Promise<void> {
    await locator.evaluate(element => element.scrollIntoView());
}





/**
 * This method is used to print all Link text
 * @param locator 
 */
async printAllLinkText(locator : Locator){
  const links = await locator.allTextContents();

for (const link of links) {
    console.log(link);
}
}






/**
 *This method is used to print the all input feilds 
 * @param locator 
 */
async getAllInputValues(locator: Locator): Promise<void> {
    const elements = await locator.all();

    for (const element of elements) {
        console.log(await element.inputValue());
        
    }
}

    }


   

     
      