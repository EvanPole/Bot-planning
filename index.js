const puppeteer = require('puppeteer');
const fs = require('fs');
const sharp = require('sharp');
const conf = require("./config.json");

function send(date) {
    (async () => {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(conf.url_login);
        await page.type('#login', conf.user);
        await page.type('#password', conf.pass);
        await page.click('#btnSeConnecter');
        console.log('Connected');
        await page.goto(conf.page_pl);
        const screenshot = await page.screenshot();
        // Save the image
        fs.writeFileSync('screenshot.png', screenshot);
        console.log('Screen Update');

        sharp('screenshot.png')
            .resize({ width: 1920, height: 1080 })
            .extract({ left: 0, top: 200, width: 1920, height: 880 })
            .toFile('planning.png', (error) => {
                if (error) {
                    console.error('Erreur lors de la manipulation de l\'image :', error);
                } else {
                    console.log('Image redimensionnée avec succès !');
                }
            });
        await browser.close();
    })();
}

var date = new Date();
var resend = 0;

setInterval(() => {
    if (date.getDay() === 0 && resend == 0) {
        send(null);
        resend = 1;
    } else if (date.getDay() === 1 && resend == 1) {
        resend = 0;
    }
}, 6000);