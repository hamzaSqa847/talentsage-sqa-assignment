import { Page, expect } from '@playwright/test';

export class AuthPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Filling Registration Form ...
async register(name: string, companyname : string, email: string, password: string, comfirmpasword: string) {
        
  await this.page.getByRole('navigation').getByRole('button', { name: 'Start Free Trial' }).click();
  await this.page.getByRole('textbox', { name: 'John Doe' }).click();
  await this.page.getByRole('textbox', { name: 'John Doe' }).fill(name);
  await this.page.getByRole('textbox', { name: 'Acme Inc. (Optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Acme Inc. (Optional)' }).fill(companyname);
  await this.page.getByRole('textbox', { name: 'you@company.com' }).click();
  await this.page.getByRole('textbox', { name: 'you@company.com' }).fill(email);
  await this.page.locator('input[name="password"]').click();
  await this.page.locator('input[name="password"]').fill(password);
  await this.page.locator('input[name="confirmPassword"]').click();
  await this.page.locator('input[name="confirmPassword"]').fill(comfirmpasword);
  await this.page.getByRole('button', { name: 'Create Account' }).click();
  

    }

// Verify Registarion 
async verifyRegisteration() {

        await this.page.getByRole('heading', { name: 'TalentSage Dashboard' }).click();
        await expect(this.page.getByText('TalentSage Dashboard')).toBeVisible();

    }


}