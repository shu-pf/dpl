import { describe, expect, it } from '@jest/globals';
import { translateText } from './translate-text';

require('dotenv').config();

describe('translateText', () => {
  it('正常に翻訳された場合', () => {
    const text = 'test';
    const setting = {
      apiType: 'pro',
      authKey: process.env.API_KEY,
      targetLang: 'JA',
    };
    return expect(translateText(text, setting)).resolves.toBe('テスト');
  });
  // TODO: process.exitで終了した場合について、どのようにするか調べて書く
  // it("文字数制限に達した場合", () => {
  //   const text = "test";
  //   const setting = {
  //     apiType: "pro",
  //     authKey: "7f89215d-9b62-9a22-c45b-c7a85a9bc348",
  //     targetLang: "JA",
  //   };
  //   //
  //   return expect(translateText(text, setting));
  // });
});
