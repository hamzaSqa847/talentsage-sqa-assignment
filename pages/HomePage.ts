import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://talentsage.io/');
  }

  async verifyHomePageVisible() {

    await  expect(this.page.getByRole('heading', { name: 'Hire Better, Faster & Fairer.' })) .toBeVisible();
  }

   
//   async goToContactPage() {
//     await this.page.getByRole('link', { name: 'Contact us' }).click();
//   }

  // async goToLoginPage() {
  //   await this.page.getByRole('link', { name: 'Signup / Login' }).click();
  // }

  
}
