import { ThenableWebDriver } from "selenium-webdriver";
import webdriver, { Browser } from "selenium-webdriver";
import { getBaseUrl } from "../assets/routes";

let driver: ThenableWebDriver;

const getDriver = (): ThenableWebDriver => {
  return driver;
}

const setDriverLocal = (browserType: string = Browser.CHROME) => {
  driver = new webdriver.Builder()
    .forBrowser(browserType)
    .build();
  driver.manage().setTimeouts({ implicit: 10000 });
};

const setDriverAgainstDocker = (seleniumServerPort: number, browserType: string = Browser.CHROME) => {
  driver = new webdriver.Builder()
    .forBrowser(browserType)
    .usingServer(`http://localhost:${seleniumServerPort}/wd/hub/`)
    .build();
  driver.manage().setTimeouts({ implicit: 10000 });
};

const navigateTo = async (URL: string) => {
  await driver.get(`${getBaseUrl()}${URL}`);
};

const getTestTimeout = (): number => {
  let timeoutIndex = process.argv.findIndex((arg) =>
    arg.startsWith("--timeout")
  );
  let timeout = (timeoutIndex != -1) ? parseInt(process.argv[timeoutIndex + 1]) : 100000;
  return timeout;
};



const closeBrowser = async () => {
  await driver.quit();
};

export { getDriver, setDriverLocal, setDriverAgainstDocker, navigateTo, closeBrowser, getTestTimeout };
