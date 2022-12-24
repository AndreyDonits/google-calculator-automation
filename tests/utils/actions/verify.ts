import { getDriver } from "../driver";
import { By } from "selenium-webdriver";
import * as assert from "assert";

const verifyTextInElementByCss = async (selector: string, expectedText: string) => {
    let actualText: string = "";
    try {
        actualText = await getDriver().findElement(By.css(selector)).getText();
        assert.strictEqual(actualText.trim(), expectedText.trim())
    } catch (e) {
        assert.fail(`Expected this text: ${expectedText} but instead encountered: ${actualText}`);
    }

};

export { verifyTextInElementByCss }
