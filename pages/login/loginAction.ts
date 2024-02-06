import { Page } from "@playwright/test";
import { WebActions } from "../helper/webActions";
import {loginUis} from "./loginUis";

export default class LoginAction{
    page : Page;
    webActions: WebActions;
    constructor(page : Page){
        this.page = page;
        this.webActions = new WebActions(page);
    }

    async gotoPage(baseURL: string){
        await this.webActions.gotoUrl(baseURL);
    }

    async login(email:string,pass:string){
        await this.page.fill(loginUis.email,email);
        await this.page.fill(loginUis.password,pass);
        await this.page.click(loginUis.button_next);
    }
}