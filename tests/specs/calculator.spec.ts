import { describe, it, after, before } from "mocha";
import {
  setDriverLocal, setDriverAgainstDocker,
  navigateTo, closeBrowser, getTestTimeout
} from "../utils/driver";
import { clickByCss } from "../utils/actions/click";
import { calculatorSelectors } from "../pageObjects/calculator.selectors";
import { routes } from "../assets/routes";
import {
  verifyNumberOfChildsInElement,
  verifyNumberOfNumericChildsInElement,
  verifyTextInElement
} from "../utils/actions/verify"

describe("Calculator Test", function () {
  this.timeout(getTestTimeout())

  before(() => {
    // Default browser: chrome
    setDriverLocal()

    // Uncomment to run tests in selenium-grid using default browser
    // setDriverAgainstDocker(4444)

    // Uncomment to run tests in selenium-grid using specified browser
    // setDriverAgainstDocker(4444, Browser.EDGE)
  });

  it("Should perform a calculation and verify the result", async () => {
    // Open the browser and navigate to the Google calculator
    await navigateTo(routes.search);

    // Click on 5 + 10
    await clickByCss(calculatorSelectors.key5);
    await clickByCss(calculatorSelectors.keyPlus);
    await clickByCss(calculatorSelectors.key1);
    await clickByCss(calculatorSelectors.key0);
    await clickByCss(calculatorSelectors.keyEq);

    // Verify the result is 15
    await verifyTextInElement(calculatorSelectors.result, "15");
  });

  it("Count how many buttons in the calculator have numbers", async () => {
    await verifyNumberOfNumericChildsInElement(calculatorSelectors.allCalcButtons, 10);
  })

  it("Count the total number of buttons", async () => {
    await verifyNumberOfChildsInElement(calculatorSelectors.allCalcButtons, 43);
  })

  after(async () => {
    await closeBrowser();
  })
});
