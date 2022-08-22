const fs = require("fs");
const readline = require("readline");

const { createWorklog } = require("./createWorklog");
const { isSetupCorrect, areFieldsCorrect, provideDate} = require("./setupUtils");

const logWorkTime = async () => {
  const filePath = "./src/worklogdoc/timeloglist.txt";
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  if(!isSetupCorrect()) {
    return;
  };

  for await (const line of rl) {
    if (!line.trim().length) continue;
    let [task, timeSpent, date] = line.split(",").map((elem) => elem.trim());
    // format in .txt file       taskName, startTime - endTime, DD.MM        e.g   sp-9, 08;20 - 08;35, 10.07
    if(!areFieldsCorrect(task, timeSpent)) {
      break;
    }
    if (!date) {
      date = provideDate();
    }
    await createWorklog(task, timeSpent, date, filePath)
  }
};
module.exports = { logWorkTime };
