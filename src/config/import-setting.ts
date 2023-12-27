import { settingFilePath } from '../const/settingFilePath';

const importSetting = function () {
  let setting;

  try {
    setting = require(settingFilePath);

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
