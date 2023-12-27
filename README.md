# DeepL CLI (informal)

Use deepl translation in the CLI.

## Demo

![image](https://user-images.githubusercontent.com/61904065/151413018-5acd8945-19f2-4668-8941-2aa189c3dd0f.png)
![image](https://user-images.githubusercontent.com/61904065/151412108-d0d73a03-0347-420f-8b0b-cb6358a874f3.png)

## Installation

```sh
brew tap shu-pf/tap
```

```sh
brew install dpl
```

## Usage

To use this package, you first need to set an API key and Target Language.

### Config(Required)

```sh
dpl setting
```

#### Api Type

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

```sh
dpl <text>
```

### 2. Interactive mode

```sh
dpl
```

## For Developers

### Execute

```sh
pnpm start
```

### Build

```sh
pnpm build
```
