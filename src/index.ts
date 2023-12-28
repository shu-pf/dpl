import { interactiveMode } from './cmd/interactive-mode';
import { singleConversionMode } from './cmd/single-conversion-mode';
import { makeSettingFile } from './cmd/make-setting-file';
import { importSetting } from './config/setting';

const main = async () => {
  if (process.argv.length == 3 && process.argv[2] == 'setting') {
    await makeSettingFile();
    return;
  } else if (process.argv.length == 3 && process.argv[2] == 'version') {
    const version = process.env.npm_package_version;
    console.log(version);
    return;
  }

  importSetting();

  if (process.argv.length == 2) {
    interactiveMode();
  } else {
    await singleConversionMode();
  }
};

main();
