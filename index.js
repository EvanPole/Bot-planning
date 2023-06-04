const puppeteer = require('puppeteer');
const fs = require('fs');
const sharp = require('sharp');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('');
    await page.type('#login', '');
    await page.type('#password', '');
    await page.click('#btnSeConnecter');
    console.log('Connected');
    await page.goto('');
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