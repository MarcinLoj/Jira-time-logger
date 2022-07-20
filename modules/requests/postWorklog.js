const fetch = require("node-fetch");
const { counttimeSpentInSeconds } = require("../utils/timeCounter");
async function postWorklog(task, timeSpent, date, options) {
  const workDay = date.split(".")[0].trim();
  const workMonth = date.split(".")[1].trim();
  const timeStart = timeSpent.split("-")[0].split(";").join(":").trim();
  const currentDate = new Date();
  const yourTimeZone = `0${(currentDate.getTimezoneOffset() / 60) * -1}00Z`;
  const { JIRA_DOMAIN_NAME, USER_EMAIL, API_TOKEN } = options;
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
      console.log(
        `Response status: ${response.status} ${response.statusText} `
      );
    })
    .catch((err) =>
      console.error(`
  
                  When logging time on ${task.toUpperCase()} at time ${timeSpent} at date ${date} error occured:
                  ${err}
      
      `)
    );
}

module.exports = { postWorklog };
