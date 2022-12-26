import { getDriver } from "../driver";
import { By, until, WebElement } from "selenium-webdriver";
import * as assert from "assert";
import { getTextFromElementBy, getTextFromWebElement } from "./get"

const verifyTextInElement = async (selector: By, expectedText: string) => {
    let actualText: string = "";
    try {
        actualText = await getTextFromElementBy(selector);
        assert.strictEqual(actualText.trim(), expectedText.trim())
        console.log(`Verified the text: ${expectedText} under this element: ${selector} successfully.`)
    } catch (e) {
        assert.fail(`Expected this text: ${expectedText} but instead encountered: ${actualText}.`);
    }
};

const verifyNumberOfChildsInElement = async (selector: By, expectedNumber: number) => {
    let numberOfElements: number = 0;
    try {
        await getDriver().wait(until.elementLocated(selector));
        numberOfElements = (await getDriver().findElements(selector)).length;
        assert.strictEqual(numberOfElements, expectedNumber);
        console.log(`Number of elements under: ${selector} was as expected: ${expectedNumber}`)
    } catch (e) {
        assert.fail(
            `Problem occured while counting the number of numeric elements using this selector: ${selector}.
            See error: ${e}`);
    }
};

const verifyNumberOfNumericChildsInElement = async (selector: By, expectedNumber: number) => {
    let numberOfNumericElements: number = 0;
    try {
        await getDriver().wait(until.elementsLocated(selector));
        const buttons: WebElement[] = await getDriver().findElements(selector);
        for (const button of buttons) {
            const text = await getTextFromWebElement(button);
            if (Number.isInteger(parseInt(text)))
                numberOfNumericElements++;
        }
        assert.strictEqual(numberOfNumericElements, expectedNumber);
        console.log(`Number of numeric elements under: ${selector} was as expected: ${expectedNumber}.`)
    } catch (e) {
        assert.fail(
            `Problem occured while counting the number of elements using this selector: ${selector}.
            See error: ${e}`);
    }
};

export { verifyTextInElement, verifyNumberOfChildsInElement, verifyNumberOfNumericChildsInElement }
