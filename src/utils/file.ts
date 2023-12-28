import path from 'path';
import fs from 'fs';

/**
 * ディレクトリを作成してファイルを書き込む関数
 */
async function writeFileWithDirectoryCreation(filePath: string, data: string) {
  const directory = path.dirname(filePath);

  // ディレクトリが存在しない場合、作成する
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // ファイルを書き込む
  fs.writeFileSync(filePath, data);
}

export { writeFileWithDirectoryCreation };
