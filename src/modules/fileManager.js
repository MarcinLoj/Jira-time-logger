const fs = require("fs");
const readline = require("readline");

const removeLinesInFile = (filePath) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
  });
  const output = fs.createWriteStream(filePath);
  const firstRemoved = false;

  rl.on("line", (line) => {
    if (!firstRemoved) {
      firstRemoved = true;
      return;
    }
    output.write(line + "\n");
  });
};

const createWorklogDocumentation = (task, timeSpent, date, filePath) => {
  const currentDate = new Date();

  fs.appendFile(
    `./src/worklogdoc/${currentDate.getFullYear()}__${date.split(".")[1]}.txt`,
    `${task}, ${timeSpent}, ${date}\n`,
    (err) => {
      if (err) {
        console.log(err)
        console.log(`${task}, ${timeSpent}, ${date} has not been saved to file\n`);
      }
      else {
        removeLinesInFile(filePath)
      }
    }
  );
};

module.exports = { createWorklogDocumentation };
