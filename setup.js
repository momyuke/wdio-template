import dotenv from "dotenv";
dotenv.config();

let browsers = {
  edge: {
    browserName: "MicrosoftEdge",
    maxInstances: 2,
  },
  chrome: {
    browserName: "chrome",
    maxInstances: 2,
  },
  firefox: {
    browserName: "firefox",
    maxInstances: 2,
  },
};

let argsConfigName = {
  edge : "ms:edgeOptions",
  chrome : "goog:chromeOptions",
  firefox: "moz:firefoxOptions"
}

let argsBrowsers = {
  args: ["--headless"]
}

let android = {
  //path is default since the webdriverio act as a proxy for communicate with appium
  path: "/wd/hub",
  //the platform that you want to run in. It used to be android or ios, since website doesn't need to define the platformName
  platformName: "Android",
  //deviceName comes from your device, use adb to see it.
  deviceName: "hekffakvbybytkvs",
  //path to the apk file that you want to automate, just copy it from properties of file
  app: "C:/Users/Teguh-Genflix/3D Objects/Learn/Automation/webdriver/mobile-genflix-prod-debug-220822.apk",
  //max instance is maximum instance that you want to run at the same time
  maxInstances: 1,
};

/**
 * @variable {string}   platform  comes from .env file that modified when you run the "npm run test"
 * @returns [string]   it will return for define which test case that need to run (according to platform that want yo run)
 */
let setupPathPlatform = () => {
  let platform = process.env.PLATFORM_NAME;
  switch (platform) {
    case "android":
      return ["./test/specs/android/*.js"];

    case "website":
      return ["./test/specs/web/*.js"];
  }
};

/**
 * @variable {string}   platform  comes from .env file that modified when you run the "npm run test"
 * @returns {string} or [string]  (according to platform that you want to run)
 */
let setupServices = () => {
  let platform = process.env.PLATFORM_NAME;

  switch (platform) {
    case "android":
      return ["appium"];

    case "website":
      return ["selenium-standalone"];
  }
};

/**
 * @variable {string}   platform  comes from .env file that modified when you run the "npm run test"
 * @returns [object]  it will return set of the browsers or mobile that need to run 
 */
let setupBrowser = () => {
  let platform = process.env.PLATFORM_NAME;
  let result = [];
  switch (platform) {
    case "website":
      let browsersName = process.env.BROWSER_NAME.split(" ");
      let browser;
      browsersName.forEach((browserName) => {
        browser = browsers[browserName];
        if(process.env.IS_HEADLESS == "true") browser[argsConfigName[browserName]] = argsBrowsers; 
        result.push(browser);
      });
      break;

    case "android":
      result.push(android);
      break;
  }
  return result;
};

export default { setupBrowser, setupPathPlatform, setupServices };
