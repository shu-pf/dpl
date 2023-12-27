import { languageOptions } from '../const/languageOptions';
import { settingFilePath } from '../const/settingFilePath';

interface Setting {
  apiType: 'free' | 'pro';
  authKey: string;
  targetLang: keyof typeof languageOptions;
}

// {"apiType":"pro","authKey":"e3c996b1-efab-d8bd-d974-8e1aeda57e52","targetLang":"JA"}⏎

let setting: Setting;

const importSetting = function () {
  try {
    setting = require(settingFilePath);
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

export { importSetting, setting };
