const fs = require("fs");
const readline = require("readline");
require("dotenv").config();
const {
  createWorklogDocumentation,
  removeLinesInFile,
} = require("./fileManager");
const { postWorklog } = require("../requests/postWorklog");
const { checkSetup } = require("./checkSetup");

const USER_EMAIL = process.env.USER_EMAIL;
const API_TOKEN = process.env.API_TOKEN;
const JIRA_DOMAIN_NAME = process.env.JIRA_DOMAIN_NAME;

const logWorkTime = async () => {
  const filePath = "./worklogdoc/timeloglist.txt";
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const isSetupOK = await checkSetup();
  if (isSetupOK) {
    return;
  }

  for await (const line of rl) {
    if (!line.trim().length) continue;
    let [task, timeSpent, date] = line.split(",").map((elem) => elem.trim());
    const areFieldsNotProvided = await areRequiredFieldsNotProvided(
      task,
      timeSpent
    );

    if (areFieldsNotProvided) {
      // format in .txt file       taskName, startTime - endTime, DD.MM        e.g   sp-9, 08;20 - 08;35, 10.07
      break;
    }

    if (!date) {
      date = provideDateIfNotExists(date);
    }

    await postWorklog(task, timeSpent, date, {
      USER_EMAIL,
      API_TOKEN,
      JIRA_DOMAIN_NAME,
    }).then(() => {
      createWorklogDocumentation(task, timeSpent, date);
      removeLinesInFile(filePath);
    });
  }
};
const provideDateIfNotExists = (date) => {
  const currentDate = new Date();
  return `${currentDate.getDate()}.${
    currentDate.getMonth() >= 9
      ? currentDate.getMonth() + 1
      : `0${currentDate.getMonth() + 1}`
  }`;
};

const areRequiredFieldsNotProvided = (field1, field2) => {
  return new Promise((resolve, reject) => {
    if (!field1 || !field2) {
      reject(
        "In order to continue you have to provide all required fields in ./worklogdoc/timeloglist.txt file"
      );
    } else {
      resolve();
    }
  }).catch((err) => {
    console.log(err);
    return err;
  });
};
module.exports = { logWorkTime };
