import { describe, it, after, before } from "mocha";
import { setDriver, navigateTo, closeBrowser, getTestTimeout } from "../utils/driver";
import { clickByCss } from "../utils/actions/click";
import { calculatorSelectors } from "../pageObjects/calculator.selectors";
import { routes } from "../assets/routes";
import { verifyTextInElementByCss } from "../utils/actions/verify"

describe("Calculator Test", function () {
  this.timeout(getTestTimeout())

  before(function () {
    setDriver()
  });

  it("Should perform a calculation and verify the result", async function () {

    // Open the browser and navigate to the Google calculator
    await navigateTo(routes.search);

    // Click on 5 + 10
    await clickByCss(calculatorSelectors.key5)
    await clickByCss(calculatorSelectors.keyPlus)
    await clickByCss(calculatorSelectors.key1)
    await clickByCss(calculatorSelectors.key0)
    await clickByCss(calculatorSelectors.keyEq)



    // Verify the result is 15
    await verifyTextInElementByCss(calculatorSelectors.result, "15")
    //   let result = await driver.findElement(By.css(".BNeawe.tAd8D.AP7Wnd")).getText();
    //   if (result !== "15") {
    //     throw new Error(`Unexpected result: ${result}`);
    //   }

    //   // Count how many buttons in the calculator have numbers
    //   let numberButtons = await driver.findElements(By.css(".BNeawe.tAd8D.AP7Wnd"));
    //   console.log(`Number of number buttons: ${numberButtons.length}`);

    //   // Count the total number of buttons
    //   let allButtons = await driver.findElements(By.css(".BNeawe.tAd8D.AP7Wnd"));
    //   console.log(`Total number of buttons: ${allButtons.length}`);
  });

  after(async () => {
    // Stop the driver
    await closeBrowser();
  })
});
