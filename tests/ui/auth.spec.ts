import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { AuthPage } from '../../pages/AuthPage';
import { emit } from 'process';

test('Test Case auth ', async ({ page }) => {

    const Home = new HomePage(page);
    const Auth = new AuthPage(page);

    await Home.goto();
    await page.waitForTimeout(2000); // pause to see page
    await Home.verifyHomePageVisible();
await page.waitForTimeout(2000); // pause to see page


 const r = Math.floor(Math.random() * 10000);
await Auth.register(`User${r}`, `Company${r}`, `user${r}@gmail.com`, `Pass${r}!`, `Pass${r}!`);   
// await Auth.register('Hamza Ali', 'Vision tact', 'hamzaicp54@gmail.com', 'Applemango1!', 'Applemango1!');

await Auth.verifyRegisteration();
    // await page.waitForTimeout(2000); // pause to see page


});