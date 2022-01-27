# dpl

Use deepl translation in the CLI.

## Demo

## Requirement

- node
- npm

## Installation

```
npm i -g deepl-cli
```

## Usage

To use this package, you first need to set an API key and Target Language.

### Config(Required)

```
// dpl [API Key] [Target Language]
$ dpl XXXXX XX
```

#### api type

pro or free

#### API Key

API KEY is issued when you register to use deepl api.
https://www.deepl.com/pro-api?cta=menu-pro-api/

#### Target Language

The language into which the text should be translated. Options currently available:
https://www.deepl.com/ja/docs-api/translating-text/request/

```
"BG" - Bulgarian
"CS" - Czech
"DA" - Danish
"DE" - German
"EL" - Greek
"EN-GB" - English (British)
"EN-US" - English (American)
"EN" - English (unspecified variant for backward compatibility; please select EN-GB or EN-US instead)
"ES" - Spanish
"ET" - Estonian
"FI" - Finnish
"FR" - French
"HU" - Hungarian
"IT" - Italian
"JA" - Japanese
"LT" - Lithuanian
"LV" - Latvian
"NL" - Dutch
"PL" - Polish
"PT-PT" - Portuguese (all Portuguese varieties excluding Brazilian Portuguese)
"PT-BR" - Portuguese (Brazilian)
"PT" - Portuguese (unspecified variant for backward compatibility; please select PT-PT or PT-BR instead)
"RO" - Romanian
"RU" - Russian
"SK" - Slovak
"SL" - Slovenian
"SV" - Swedish
"ZH" - Chinese
```

### 1. Normal mode

```
$ dpl "Enter the text you want to translate."
You'll get a translated text back.
```

### 2. Interactive mode

```
$ dpl
> Enter the text you want to translate.
You'll get a translated text back.
> Enter the text you want to translate.
You'll get a translated text back.
...
```
