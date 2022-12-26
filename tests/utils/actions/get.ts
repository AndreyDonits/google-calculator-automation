import { getDriver } from "../driver";
import { By, until, WebElement } from "selenium-webdriver";
import assert from "assert";

const getTextFromElementBy = async (selector: By): Promise<string> => {
    let text: string = "";
    try {
        text = await getDriver().wait(until.elementLocated(selector)).getText();
        return text;
    } catch (e) {
        assert.fail(
            `Found error while gettting the text from an element.
            See details here:\n${e}`)
    }

};

const getTextFromWebElement = async (selector: WebElement): Promise<string> => {
    let text: string = "";
    try {
        text = await selector.getText();
        return text;
    } catch (e) {
        assert.fail(
            `Found error while gettting the text from an element.
            See details here:\n${e}`)
    }
};

export { getTextFromElementBy, getTextFromWebElement }
