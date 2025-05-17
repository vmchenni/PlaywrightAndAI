// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('checkDiscountPrice', async ({ page }) => {
  const aiArgs = {page, test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discountPriceOfTomato =  await ai("What is the Discount price of Tomato", aiArgs)
  expect(discountPriceOfTomato).toEqual("26")

  const actualPriceOfTomato= await ai("What is the Price of Tomato", aiArgs);
  expect(actualPriceOfTomato).toEqual("37")

  const difference= await ai("What is the value difference between actualPriceOfTomato and  discountPriceOfTomaton of Tomato", 
    aiArgs)
  expect(difference).toEqual("11")  






  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
