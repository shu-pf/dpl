# DeepL CLI (informal)

Use deepl translation in the CLI.

## Demo

![image](https://github.com/shu-pf/dpl/assets/61904065/b481fafc-686e-4d53-bbf3-5a55e8ad6705)
![image](https://github.com/shu-pf/dpl/assets/61904065/20023dff-1993-4d41-a21d-605838b85766)

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
