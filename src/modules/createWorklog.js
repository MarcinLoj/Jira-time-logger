const fetch = require("node-fetch");
require("dotenv").config();
const { counttimeSpentInSeconds } = require("./timeCounter");
const {
  createWorklogDocumentation,
  removeLinesInFile,
} = require("./fileManager");

async function createWorklog(task, timeSpent, date, filePath) {
  const USER_EMAIL = process.env.USER_EMAIL;
  const API_TOKEN = process.env.API_TOKEN;
  const JIRA_DOMAIN_NAME = process.env.JIRA_DOMAIN_NAME;
  const workDay = date.split(".")[0].trim();
  const workMonth = date.split(".")[1].trim();
  const timeStart = timeSpent.split("-")[0].split(";").join(":").trim();
  const currentDate = new Date();
  const yourTimeZone = `0${(currentDate.getTimezoneOffset() / 60) * -1}00Z`;

  const bodyData = `{
                    "timeSpentSeconds": ${counttimeSpentInSeconds(timeSpent)},
                    "started": "${currentDate.getFullYear()}-${workMonth}-${workDay}T${timeStart}:00.000+${yourTimeZone}"
                  }`;

  fetch(
    `https://${JIRA_DOMAIN_NAME}.atlassian.net/rest/api/3/issue/${task.toUpperCase()}/worklog`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${USER_EMAIL}:${API_TOKEN}`
        ).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    }
  )
    .then((response) => {
      if(response.status === 201) {
        console.log(
          `Response status: ${response.status} ${response.statusText}`
        );
        createWorklogDocumentation(task, timeSpent, date, filePath);
      }
      else {
        console.error(`When logging time on ${task.toUpperCase()} at time ${timeSpent} at date ${date} request failed. Response status is ${response.status}`)
      }
    })
    .catch((err) =>
      console.error(`When logging time on ${task.toUpperCase()} at time ${timeSpent} at date ${date} network error occured: ${err}`)
    );
}

module.exports = { createWorklog };
