// @ts-check
const { test, expect } = require('@playwright/test');

test('Cadastrar um lead', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') 

  await page.getByPlaceholder('Seu nome completo').fill('Vitor Moura')
  await page.getByPlaceholder('Seu email principal').fill('vitor@moura.com')

  await page.getByTestId('modal').getByText('Quero entrar na fila').click()

  await page.getByText('seus dados conosco').click()
  const content = await page.content()


  await page.waitForTimeout(5000)
});
