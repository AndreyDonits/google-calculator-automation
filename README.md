# Google Calculator Automation

This project contains automation tests for the Google Calculator feature using Mocha and Selenium. The tests are written in TypeScript and check the functionality of the Google Calculator, which can be found at this link: https://www.google.co.il/search?q=google+calculator.

# Getting Started

To set up the project on your local machine, you will need to install the following dependencies:

* Node.js
* @types/node
* TypeScript
* ts-node
* Mocha
* @types/mocha
* Selenium
* @types/selenium-webdriver<br><br>

You can install these dependencies by running the following command:
```
npm install
```

# Usage

## Run tests locally

To run the automation tests, use the following command:

```
npm test
```
This will execute the tests and display the results in the command line.<br>
Make sure the right browser installed.<br>

### setDriverLocal method
To decide which browser to use for the tests call `setDriverLocal` method inside before hook.
This method creates a new instance of a webdriver for the specified browser type, using the webdriver module.
The `setDriverLocal` method takes an optional parameter `browserType`, which specifies the type of browser to use.
The default value for this parameter is `Browser.CHROME`, which indicates that the Chrome browser should be used if no other value is specified.
The method creates a new webdriver instance using the `webdriver.Builder` class, and specifies the browser type using the `forBrowser` method.<br><br>
The method also sets the implicit wait timeout for the driver using the `setTimeouts` method.<br>
This timeout specifies the amount of time the driver should wait for elements to appear on the page before timing out.<br>

## Run tests using selenium grid & Docker
To build the `docker-compose.yml` file, you will need to have Docker (running) and Docker Compose installed on your machine.<br>
To build the containers specified in the docker-compose file, navigate to the directory where the file is located and run the following command:
```
docker-compose up
```
This will build and start all the containers specified in the file. The `-d` flag can be added at the end of the command to run the containers in detached mode, allowing the containers to run in the background.<br><br>

To stop the containers, use the following command:
```
docker-compose down
```
This will stop and remove the containers, networks, and volumes created by the `up` command.<br>

The docker-compose file defines four containers: `chrome`, `edge`, `firefox`, and `selenium-hub`.<br>
The `selenium-hub` container is the hub of a Selenium grid, which allows you to run tests in multiple browsers.<br>
The `chrome`, `edge`, and `firefox` containers are nodes that can connect to the hub and execute tests in the respective browsers.<br>
The `depends_on` directive specifies that the nodes should not start until the `selenium-hub` container is up and running.<br>

To see the running sessions on each browser you can open the selenium-grid UI console on: http://localhost:4444<br>
Read more about this here: https://github.com/SeleniumHQ/docker-selenium
