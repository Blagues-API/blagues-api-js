describe('Blagues-API browser test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  test('joke called', async () => {
    await page.waitForSelector("#joke")
    let element = await page.$('#joke')
    const content = await page.evaluate(obj => obj.textContent, element)
    expect(content).toMatch('joke_received')
  })
})
