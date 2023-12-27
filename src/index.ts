// Mode
import { interactiveMode } from './scripts/interactive-mode';
import { singleConversionMode } from './scripts/single-conversion-mode';
import { makeSettingFile } from './scripts/make-setting-file';

// util
import { importSetting } from './util/import-setting';

const main = async () => {
  let setting;

  switch (process.argv.length) {
    case 2:
      setting = importSetting();
      interactiveMode(setting);
      break;
    case 3:
      setting = importSetting();
      singleConversionMode(setting);
      break;
    case 4:
      if (process.argv[2] == 'setting') {
        if (process.argv[3] == 'init') {
          makeSettingFile();
        }
      }
      break;
    default:
      console.log('Invalid parameter.');
      break;
  }
};

main();
