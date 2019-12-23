# StoryTab 📑

_Generate documentation in Storybook tab 📑_

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![npm version][npm-badge]][npm-url]
[![TypeScript][typescript-badge]][typescript-url]

## Install

Install:

- StoryTab  
  &nbsp;&nbsp;npm `npm install story-tab --save-dev`  
  &nbsp;&nbsp;yarn `yarn add story-tab --dev`
- StoryTab Template for intended _framework_:  
  &nbsp;&nbsp;_React_  
  &nbsp;&nbsp;npm `npm install story-tab-template-react --save-dev`  
  &nbsp;&nbsp;yarn `yarn add story-tab-template-react --dev`

## Usage

To generate StoryTab components in your project:

- default export component and name file as:
  - **`[filename].storytab.[ext]`**
- from your terminal:
  - cd into your project
  - run **`$ storytab generate react`**

Import generated StoryTab components into Storybook. 🎉

## Generated StoryTab Files
- By default generated files will be prefixed with `_` for example:  
`MyComponent.storytab.jsx` & `MyComponent.storytab.css` -> `_MyComponent.jsx`  
- You can set custom prefix with `--prefix` flag:  
`$ storytab generate react --prefix=CustomPrefix`

- Import generated StoryTab component and use it in story:
  ```jsx
  import React from 'react';
  import { storiesOf } from '@storybook/react';

  import GreenButton from './_GreenButton';
  import RedButton from './_RedButton';

  const stories = storiesOf('Button', module);

  stories
    .add('Green Button', () => <GreenButton />)
    .add('Red Button', () => <RedButton />);
  ```

<!-- GIF -->

# Commands

<!-- commands -->

- [`storytab generate FRAMEWORK`](#storytab-generate-framework)
- [`storytab help [COMMAND]`](#storytab-help-command)

## `storytab generate FRAMEWORK`

generate documentation

```
USAGE
  $ storytab generate FRAMEWORK

ARGUMENTS
  FRAMEWORK  (react) generate StoryTab for desired framework

OPTIONS
  --prefix=prefix  [default: _] generate StoryTab components with filename prefix
```

_See code: [src/commands/generate.ts](https://github.com/mkosir/story-tab/blob/v1.0.11/src/commands/generate.ts)_

## `storytab help [COMMAND]`

display help for storytab

```
USAGE
  $ storytab help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.2/src/commands/help.ts)_

<!-- commandsstop -->

[npm-url]: https://www.npmjs.com/package/story-tab
[npm-badge]: https://img.shields.io/npm/v/story-tab.svg
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
