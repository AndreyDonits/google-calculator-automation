import { By } from "selenium-webdriver";

const calculatorSelectors = {

    allCalcButtons: By.css(".SKWP2e td [role='button']"),

    // Keys
    key0: By.css("[jsname='bkEvMb']"),
    key1: By.css("[jsname='N10B9']"),
    key5: By.css("[jsname='Ax5wH']"),
    keyPlus: By.css("[jsname='XSr6wc']"),
    keyEq: By.css("[jsname='Pt8tGc']"),

    // Result panel
    result: By.id("cwos"),
    lastCalculationOfTheResult: By.css("[jsname='ubtiRe']")
}

export { calculatorSelectors };
