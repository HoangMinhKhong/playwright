import { expect, test} from "../pages/helper/model";
// @ts-ignore
import * as data from '../data/data.json'

test.describe('User test login', async () => {
    test('@test01 Login success',async ({baseURL, loginAction}) => {
        await test.step('Go to the page ${baseURL}',  async () => {
            await loginAction.gotoPage('${baseURL}');
        });
        await test.step(`Enter user is '${data.email}' and password is '${data.pass}'`,async() => {
            await loginAction.login(data.email, data.pass);
        });
    })
})
