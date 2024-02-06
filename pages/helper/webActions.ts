import { Page, ElementHandle } from "@playwright/test";
import {loginUis} from "../login/loginUis";

export class WebActions {
    constructor (public page : Page){
    }

    async gotoUrl(url: string): Promise <void>{
        await this.page.goto(url);
        await this.page.click(loginUis.txt_login);
        await this.page.fill(loginUis.email,"tesst");
    }
}