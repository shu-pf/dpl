import os from 'os';

const homeDirectory = os.homedir();
const settingFilePath = homeDirectory + '/.config/dpl/setting.json';

export { settingFilePath };
