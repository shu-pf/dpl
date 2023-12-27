exports.importSetting = () => {
  let setting;
  try {
    setting = require("../../setting.json");
    return setting;
  } catch (e) {
    if (e.code == "MODULE_NOT_FOUND") {
      console.log("Can't find setting file.");
      console.log("Please run 'dpl setting init'.");
      console.log("See Readme for details.");
      process.exit(0);
    } else {
      throw e;
    }
  }
};
