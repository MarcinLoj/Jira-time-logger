require("dotenv").config();
const USER_EMAIL = process.env.USER_EMAIL;
const API_TOKEN = process.env.API_TOKEN;
const JIRA_DOMAIN_NAME = process.env.JIRA_DOMAIN_NAME;

const isSetupCorrect = () => {
  let isCorrect = true;
    if (!USER_EMAIL || !API_TOKEN || !JIRA_DOMAIN_NAME) {
      console.log('You have to provide all fields listed in .env file')
      isCorrect = false;
    }
    return isCorrect;
};

const provideDate = () => {
  const currentDate = new Date();
    return `${currentDate.getDate()}.${
      currentDate.getMonth() >= 9
        ? currentDate.getMonth() + 1
        : `0${currentDate.getMonth() + 1}`
    }`;
};

const areFieldsCorrect = (field1, field2) => {
  let areFieldsProvided = true;
    if (!field1 || !field2) {
      console.error("In order to continue you have to provide all required fields in /src/worklogdoc/timeloglist.txt file");
      areFieldsProvided = false;
    }
    return areFieldsProvided;
}

module.exports = { isSetupCorrect, provideDate, areFieldsCorrect };
