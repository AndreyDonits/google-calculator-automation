import { getDriver } from "../driver";
import { By } from "selenium-webdriver";

const clickByCss = async (selector: string) => {
  await getDriver().findElement(By.css(selector)).click();
};

const clickById = async (selector: string) => {
  await getDriver().findElement(By.id(selector)).click();
};

export { clickByCss, clickById };
