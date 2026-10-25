import { test, expect } from '@playwright/test';
//AAA
//page é a injeção de dependência do playwright
//test é a função de teste do playwright
//expect é a função de expectativa do playwright
//test('Deve consultar o pedido aprovado', async ({ page }) => {
// é o nome do teste
// async é a função assíncrona do teste
// ({ page }) é o parâmetro da função de teste
// page é a página do teste

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

  //await page.locator('//label[text()="Número do Pedido"]/..//input').fill('VLO-GSPZ32');
  //await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-GSPZ32');
  //await page.getByLabel('Número do Pedido').fill('VLO-GSPZ32');

  await page.getByTestId('search-order-id').click();
  //Assert
  await page.getByTestId('search-order-id').fill('VLO-GSPZ32');
  //Act
  await page.getByTestId('search-order-button').click();
  //Assert
  await expect(page.getByText('VLO-GSPZ32')).toBeVisible({ timeout: 10_000 });//10 segundos de timeout
  await expect(page.getByText('VLO-GSPZ32')).toContainText('VLO-GSPZ32');
  await expect(page.getByText('APROVADO')).toBeVisible();
  await expect(page.getByText('APROVADO')).toContainText('APROVADO');
});