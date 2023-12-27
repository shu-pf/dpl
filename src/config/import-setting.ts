const importSetting = function () {
  let setting;

  try {
    setting = require('../../setting.json');

    return setting;
  } catch (e) {
    const err = e as NodeJS.ErrnoException;

    if (err.code == 'MODULE_NOT_FOUND') {
      console.log("Can't find setting file.");
      console.log("Please run 'dpl setting init'.");
      console.log('See Readme for details.');
      process.exit(0);
    }

    throw e;
  }
};

export { importSetting };
