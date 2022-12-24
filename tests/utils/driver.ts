import { ThenableWebDriver } from "selenium-webdriver";
import webdriver from "selenium-webdriver";
import { getBaseUrl } from "../assets/routes";

const browserArgIndex = process.argv.findIndex((arg) =>
  arg.startsWith("--browser")
);
const browserType = process.argv[browserArgIndex + 1];

let driver: ThenableWebDriver;

const getDriver = (): ThenableWebDriver => {
  return driver;
}

const setDriver = () => {
  switch (browserType) {
    case "chrome":
      driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
      break;
    case "firefox":
      driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox())
        .build();
      break;
    default:
      console.info(
        "Since browser args was not provided in command proceeding with default (Chrome)"
      );
      driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
      break;
  }
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

export { getDriver, setDriver, navigateTo, closeBrowser, getTestTimeout };
