const USER_EMAIL = process.env.USER_EMAIL;
const API_TOKEN = process.env.API_TOKEN;
const JIRA_DOMAIN_NAME = process.env.JIRA_DOMAIN_NAME;

const isSetupDoneProperly = () => {
  return new Promise((resolve, reject) => {
    if (!USER_EMAIL.length || !API_TOKEN.length || !JIRA_DOMAIN_NAME.length) {
      reject(`You have to provide all fields listed in .env file`);
    } else {
      resolve();
    }
  });
};

const checkSetup = async () => {
  const isSetupDone = await isSetupDoneProperly().catch((err) => {
    console.log(err);
    return err;
  });
  return isSetupDone;
};
module.exports = { checkSetup };
