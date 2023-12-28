import { languageOptions } from '../const/languageOptions';
import { settingFilePath } from '../const/settingFilePath';

/**
 * 設定ファイルはjson形式で以下のように保存される.
 * {"apiType":"pro","authKey":"xxxxx-xxxxx-xxxxx-xxxxx","targetLang":"JA"}
 */

interface Setting {
  apiType: 'free' | 'pro';
  authKey: string;
  targetLang: keyof typeof languageOptions;
}

let setting: Setting;

/**
 * importSetting は設定ファイルを読み込む.
 * setting を読み込む前にこの関数を実行する必要がある.
 */
const importSetting = function () {
  try {
    setting = require(settingFilePath);
  } catch (e) {
    const err = e as NodeJS.ErrnoException;

    if (err.code == 'MODULE_NOT_FOUND') {
      console.log("Can't find setting file.");
      console.log("Please run 'dpl setting'.");
      console.log('See README for details.');
      process.exit(0);
    }

    throw e;
  }
};

export { importSetting, setting };
