import { test, expect } from '@playwright/test';
//AAA
test('Deve consultar o pedido aprovado', async ({ page }) => {
    //Arrange
  await page.goto('http://localhost:5173/');
  //Arrange
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  //Act
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  //Assert
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
  //Act
  await page.getByTestId('search-order-id').click();
  //Assert
  await page.getByTestId('search-order-id').fill('VLO-GSPZ32');
  //Act
  await page.getByTestId('search-order-button').click();
  //Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-GSPZ32');
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});