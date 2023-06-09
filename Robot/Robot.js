const { Builder, By, Key } = require("selenium-webdriver");
const tempo_de_reload_da_pagina = 1000 * 60 * 60 * 4;
const tempo_de_reload_da_pagina_paraTeste = 1000 * 20;

(async function RobotLoginGooglePopUp() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();

    // Navigate to Url
    await driver.get("http://localhost:3000/");
    
    // localiza o botao para iniciar o processo de login
    await sleep(2000);
    await driver.findElement(By.id("btn_login")).click();
    
    // Troca foco para pagina popup
    const handles = await driver.getAllWindowHandles();
    const popupHandle = handles[1];
    await driver.switchTo().window(popupHandle);
    await driver.manage().window().setRect({ x: 0, y: 220 });
    
    // localiza o campo de email, digita e da Enter
    await driver.findElement(By.xpath('//*[@id="identifierId"]')).sendKeys("audiencias-civel-vitoria@tjes.jus.br", Key.ENTER);

    // localiza o campo de senha, digita e da Enter
    await sleep(4000);
    await driver.findElement(By.xpath('//*[@id="password"]/div[1]/div/div[1]/input')).sendKeys("@Civel@2023", Key.ENTER);

    // // Botões de confirmação de segurança
    await sleep(3000);
    await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div[1]/a')).click();

    await sleep(2000);
    await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div[2]/p[2]/a')).click();

    await sleep(2000);
    await driver.findElement(By.xpath('//*[@id="submit_approve_access"]/div/button')).click();

    // // Troca foco para pagina principal
    await driver.switchTo().window(handles[0]);

     // coloca a pagina em modo tela cheia
    await driver.manage().window().fullscreen();

    // faz a consulta do calendario
    await sleep(2000);
    await driver.findElement(By.id("btn_dados")).click();

    setTimeout(async () => {
        await driver.close();
        RobotLoginGooglePopUp();
    }, tempo_de_reload_da_pagina); // tempo para reload da pagina
})();

async function sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec));
}
