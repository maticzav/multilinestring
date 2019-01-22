> If this package reaches anyone from NPM, please let me know if we could change the name to `multilinestring`.

# multilines

[![npm version](https://badge.fury.io/js/multilines.svg)](https://badge.fury.io/js/multilines)
[![CircleCI](https://circleci.com/gh/maticzav/multilinestring/tree/master.svg?style=shield)](https://circleci.com/gh/maticzav/multilinestring/tree/master)
[![codecov](https://codecov.io/gh/maticzav/multilinestring/branch/master/graph/badge.svg)](https://codecov.io/gh/maticzav/multilinestring)

> The missing template literal for NodeJS.

## Overview

`multilines` removes all spaces before `|` character and first space after if present.

- 💅 **Prettier code style:** You no longer have to care about spaces in multiline strings!
- 🌳 **Zero dependencies:** Completely self contained!
- 💡 **Inspired by Scala code style:** Used by the best, now implemented for everyone.

## Installation

```bash
yarn add multilines
```

## Example

```ts
import mls from 'multilines'

// Before

function generate(...args) {
  const string = `
I have to start at the beggining of the line
so I don't break the string indentation.
  `
}

// After

function generate(...args) {
  const string = mls`
    | I can be aligned with other code
    | and everything still works as expected.
    `
}
```

## License

MIT @ Matic Zavadlal
