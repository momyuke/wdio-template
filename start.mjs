import { execSync } from "child_process";
import dotenv from "dotenv";
import inquirer from "inquirer";

dotenv.config();

const exec = (commands) => {
  execSync(commands, { stdio: "inherit", shell: true });
};

(async () => {
  try {
    let answer = await inquirer.prompt([
      {
        type: "list",
        name: "platformType",
        message: "What platform do you want to test?",
        choices: ["mobile", "website"],
      },
    ]);

    switch (answer.platformType) {
      case "website":
        let whichBrowser = await inquirer.prompt([
          {
            type: "checkbox",
            name: "browserName",
            message: "Choose browser that you want",
            choices: ["edge", "firefox", "chrome"],
          },
        ]);
        let browsers = "";
        whichBrowser.browserName.forEach((browser) => {
          browsers += browser + " ";
        });
        browsers = browsers.slice(0, browsers.length - 1);
        process.env.BROWSER_NAME = browsers;
        process.env.PLATFORM_NAME = "website";
        exec("npm run wdio");
        break;

      case "mobile":
        let whichMobile = await inquirer.prompt([
          {
            type: "list",
            name: "mobileName",
            message: "Which mobile platform do you want?",
            choices: ["android", "ios"],
          },
        ]);

        switch (whichMobile.mobileName) {
          case "android":
            process.env.PLATFORM_NAME = "android";
            exec("npm run wdio");
            break;
          case "ios":
            console.log(
              "This feature is already in development. We will release it as soon as possible"
            );
        }
        break;

      default:
        console.log("We don't know what you mean");
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
