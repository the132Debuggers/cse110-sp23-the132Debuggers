describe('Home', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8081');
  });

  it('should be titled "Wizarding World of Fortune Telling"', async () => {
    await expect(page.title()).resolves.toMatch(
      'Wizarding World of Fortune Telling'
    );
  });

  it('should have a header', async () => {
    const header = await page.$('app-header');
    expect(header).toBeTruthy();

    const title = await (await header.getProperty('shadowRoot')).$('h1');
    const titleText = await title.getProperty('textContent');
    expect(titleText === '');
  });

  it('should have home section', async () => {
    const home = await page.$('home-section');
    expect(home).toBeTruthy();

    await home.click();
  });

  it('should have sort-or-choose section', async () => {
    const sortOrChoose = await page.$('sort-or-choose-section');
    expect(sortOrChoose).toBeTruthy();
  });

  it('should have sort or choose button', async () => {
    const sortOrChoose = await (
      await page.$('sort-or-choose-section')
    ).getProperty('shadowRoot');
    const sort = await sortOrChoose.$('div#sort');
    const choose = await sortOrChoose.$('div#choose');

    expect(sort).toBeTruthy();
    expect(choose).toBeTruthy();

    await choose.click();
  });

  it('should have a choose-house section', async () => {
    const sortOrChoose = await page.$('choose-house-section');
    expect(sortOrChoose).toBeTruthy();
  });

  it('should have four buttons for house choosing', async () => {
    const chooseHouse = await (
      await page.$('choose-house-section')
    ).getProperty('shadowRoot');
    const options = await chooseHouse.$$('.option');
    expect(options.length).toBe(4);

    await options[0].click();
  });

  it('should have a house-search section', async () => {
    const houseSearch = await page.$('house-search-section');
    expect(houseSearch.asElement()).toBeTruthy();
  });

  it('should be able to tell my fortune', async () => {
    const houseSearch = await (
      await page.$('house-search-section')
    ).getProperty('shadowRoot');
    const input = await houseSearch.$('input');
    const submit = await houseSearch.$('svg');

    await input.type('Hi');
    await submit.click();

    await houseSearch.waitForSelector('#response');
    const response = await (
      await houseSearch.$('#response')
    ).getProperty('textContent');
    expect(response !== '');

    await houseSearch.waitForSelector('#restart');
    const restart = await houseSearch.$('#restart');
    expect(restart).toBeTruthy();
  }, 30000);

  it('should have back button', async () => {
    const backButton = await page.$('back-button');
    expect(backButton).toBeTruthy();

    await backButton.click();
    const sortOrChoose = await page.$('sort-or-choose-section');
    expect(sortOrChoose).toBeTruthy();

    const sortButton = await (await sortOrChoose.getProperty('shadowRoot')).$('div#sort');
    await sortButton.click();
  });

  it('should have sort button', async () => {
    const sortingHat = await (await page.$('sorting-hat-section')).getProperty('shadowRoot');
    const button = await sortingHat.$('div#button');
    expect(button).toBeTruthy();

    await button.click();
    await page.waitForTimeout(5000);
  }, 30000);

  it('should have house-search section', async () => {
    const houseSearch = await page.$('house-search-section');
    expect(houseSearch).toBeTruthy();
  });

  it('should have finish button', async () => {
    const button = await page.$('finish-button');
    expect(button).toBeTruthy();

    const host = await button.getProperty('shadowRoot');
    const wrapper = await host.$('#wrapper');

    await wrapper.click();
  });

  it('should have finish section', async () => {
    const finish = await page.$('finish-section');
    expect(finish).toBeTruthy();
  });
});
