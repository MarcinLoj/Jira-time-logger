const counttimeSpentInSeconds = (timeSpent) => {
  const timeSpentInMs =
    new Date(
      0,
      0,
      0,
      getWorkTimeHour("workEnd", timeSpent),
      getWorkTimeMinute("workEnd", timeSpent),
      0,
      0
    ) -
    new Date(
      0,
      0,
      0,
      getWorkTimeHour("workStart", timeSpent),
      getWorkTimeMinute("workStart", timeSpent),
      0,
      0
    );
  return timeSpentInMs / 1000;
};

const getWorkTimeMinute = (time, timeSpent) => {
  if (time === "workStart") {
    return timeSpent.split("-")[0].split(";")[1].trim();
  }
  else {
    return timeSpent.split("-")[1].split(";")[1].trim();
  }
};

const getWorkTimeHour = (time, timeSpent) => {
  if (time === "workStart") {
    return timeSpent.split("-")[0].split(";")[0].trim();
  }
  else {
    return timeSpent.split("-")[1].split(";")[0].trim();
  }
};

module.exports = { counttimeSpentInSeconds };
