import { test as baseTest } from "@playwright/test";
import LoginAction from "../login/loginAction";

type pages = {
    loginAction: LoginAction;
} 

const testPages = baseTest.extend<pages>({
    loginAction: async ({ page }, use) => {
        await use(new LoginAction(page));
    },
})

export const test = testPages;
export const expect = testPages.expect;