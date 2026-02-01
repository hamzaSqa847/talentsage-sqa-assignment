import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Vist homepage of the website 
  async goto() {
    await this.page.goto('https://talentsage.io/');
  }

  // Verify either homepage Text is visible 
  async verifyHomePageVisible() {

    await  expect(this.page.getByRole('heading', { name: 'Hire Better, Faster & Fairer.' })) .toBeVisible();
  }



  
}
