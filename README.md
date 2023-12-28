# DeepL CLI (informal)

Use deepl translation in the CLI.

## Demo

![image](https://github.com/shu-pf/dpl/assets/61904065/956f3ab2-d533-449b-b778-af00eb471ede)
![image](https://github.com/shu-pf/dpl/assets/61904065/024c1047-a283-4456-b493-08bfef1213f9)

## Installation

```sh
brew tap shu-pf/tap
```

```sh
brew install dpl
```

## Upgrade

```sh
brew update
```

```sh
brew upgrade dpl
# If you cannot upgrade
brew reinstall dpl
```

## Usage

To use this package, you first need to set an API key and Target Language.

### Config(Required)

```sh
dpl setting
```

### Normal mode

```sh
dpl <text>
```

### Interactive mode

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
