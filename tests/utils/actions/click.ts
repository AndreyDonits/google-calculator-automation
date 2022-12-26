import { getDriver } from "../driver";
import { By, until } from "selenium-webdriver";
import assert from "assert";

const clickByCss = async (selector: By) => {
  try {
    await getDriver().wait(until.elementLocated(selector)).click();
    console.log(`Managed to click on this element ${selector} successfully`)
  } catch (e) {
    console.log(`Problem occured while trying to click on this element ${selector}`)
    console.error(`See error:\n${e}`);
    assert.fail();
  }
};

export { clickByCss };
