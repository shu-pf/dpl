import { interactiveMode } from './cmd/interactive-mode';
import { singleConversionMode } from './cmd/single-conversion-mode';
import { makeSettingFile } from './cmd/make-setting-file';
import { importSetting } from './config/import-setting';

const main = async () => {
  let setting;

  if (process.argv.length == 2) {
    setting = importSetting();
    interactiveMode(setting);
  } else if (process.argv.length == 3 && process.argv[2] == 'setting') {
    makeSettingFile();
  } else {
    setting = importSetting();
    singleConversionMode(setting);
  }
};

main();
