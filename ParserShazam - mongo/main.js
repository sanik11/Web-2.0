// Parser Shazam
const { Builder, By, Key, util } = require('selenium-webdriver');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Olexander:<password>@cluster0-ymuly.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


async function pars() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.shazam.com/ru/charts/top-200/ukraine');

        let date = new Date().toString();

        let tracks = {};
        tracks[date] = {};

        driver.sleep(15000).then(async function() {
            for (let i = 1; i < 51; i++) {

                let name = await driver.findElement(By.xpath('/html/body/div[3]/div/main/child::div/child::div[2]/child::div[1]/child::ul/child::li[' + i + ']/child::article/child::div/child::div[2]/child::div[1]/child::a')).getText();
                let link = await driver.findElement(By.xpath('/html/body/div[3]/div/main/child::div/child::div[2]/child::div[1]/child::ul/child::li[' + i + ']/child::article/child::div/child::div[2]/child::div[1]/child::a')).getAttribute('href');

                tracks[date][i] = {
                    title: name,
                    link: link
                }
            }
            driver.quit();



            client.connect(err => {
                const collection = client.db("Web").collection("ShazamParser");

                collection.insertOne(tracks, function(err, result) {

                    if (err) {
                        return console.log(err);
                    }
                    console.log(result.ops);
                    client.close();
                });
            });
        });

    } catch {
        console.log('Помилка...');
        driver.quit();
    }
}
pars();