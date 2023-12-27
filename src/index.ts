import { interactiveMode } from './cmd/interactive-mode';
import { singleConversionMode } from './cmd/single-conversion-mode';
import { makeSettingFile } from './cmd/make-setting-file';
import { importSetting } from './config/import-setting';

const main = async () => {
  if (process.argv.length == 3 && process.argv[2] == 'setting') {
    await makeSettingFile();
    return;
  }

  importSetting();

  if (process.argv.length == 2) {
    await interactiveMode();
  } else {
    await singleConversionMode();
  }
};

main();
