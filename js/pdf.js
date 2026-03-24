/**
 * Gera PDF via Puppeteer (Chrome headless)
 * npm run pdf
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const BASE_DIR = path.resolve(__dirname, '..');
const INDEX_PATH = pathToFileURL(path.join(BASE_DIR, 'index.html')).href;
const OUTPUT_PATH = path.join(BASE_DIR, 'pdf', 'casamento.pdf');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 1600 }); // desktop = fontes maiores
  await page.goto(INDEX_PATH, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('screen');

  await page.addStyleTag({
    content: `
      html { font-size: 20px !important; }
      body { overflow: visible !important; }
    `,
  });

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    scale: 1.15,
    margin: { top: '8mm', right: '8mm', bottom: '8mm', left: '8mm' },
  });

  await browser.close();
  console.log('PDF gerado:', OUTPUT_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
