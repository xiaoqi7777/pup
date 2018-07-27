var puppeteer = require('puppeteer');

(async () => {
  var brower = await puppeteer.launch();
  var page = await brower.newPage();
  await page.evaluateOnNewDocument(() => {
    // window.ttt = Math.random() * 10;
    window.a = function(){
        return 'a1'
    }
  });
  await page.goto('about:blank');

  var tiframe = await page.evaluate(() => {
    var el = document.createElement('iframe');
    document.body.appendChild(el);
    return a()
  });

  console.log('tiframe', tiframe);
  await brower.close();
})();