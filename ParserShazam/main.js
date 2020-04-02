// Parser Shazam
const { Builder, By, Key, util } = require('selenium-webdriver');


async function pars() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.shazam.com/ru/charts/top-200/ukraine');

        driver.sleep(15000).then(async function() {
            for (let i = 1; i < 51; i++) {

                let name = await driver.findElement(By.xpath('/html/body/div[3]/div/main/child::div/child::div[2]/child::div[1]/child::ul/child::li[' + i + ']/child::article/child::div/child::div[2]/child::div[1]/child::a')).getText();
                let link = await driver.findElement(By.xpath('/html/body/div[3]/div/main/child::div/child::div[2]/child::div[1]/child::ul/child::li[' + i + ']/child::article/child::div/child::div[2]/child::div[1]/child::a')).getAttribute('href');

                console.log(`${i}) ${name} - ${link}`)
            }
            driver.quit();
        });
    } catch {
        console.log('Помилка...');
        driver.quit();
    }
}

pars();