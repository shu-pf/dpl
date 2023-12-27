import { describe, expect, it } from '@jest/globals';
import { fetchToDeepl } from './fetch-to-deepl';

require('dotenv').config();

describe('fetchToDeepl', () => {
  it('無効なapiTypeが選択された場合エラーを返す', () => {
    const text = 'test';
    const setting = {
      apiType: 'InvalidPram',
      authKey: process.env.API_KEY,
      targetLang: 'JA',
    };
    return expect(fetchToDeepl(text, setting)).toEqual(
      TypeError(
        "Invalid api type. The API Type is expected to be 'free' or 'pro'."
      )
    );
  });
  it('正常に取得できた場合', () => {
    const text = 'test';
    const setting = {
      apiType: 'pro',
      authKey: process.env.API_KEY,
      targetLang: 'JA',
    };
    return fetchToDeepl(text, setting).then((result: { data: any }) => {
      expect(result.data).toEqual({
        translations: [{ detected_source_language: 'EN', text: 'テスト' }],
      });
    });
  });
});
