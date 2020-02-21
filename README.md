# renvy - a sensible and controllable env file loader

A bit like foreman, uses dotenv and comes from the [create-react-app](https://github.com/facebookincubator/create-react-app) environment loader code.

## Installation

```shell
npm install --save renvy
```

## Typical usage

**Important:** renvy will default to `NODE_ENV=development` if there is no value on `NODE_ENV`.

```js
// populates process.env
require('renvy'); // do this as early as possible in the code

// Also populate and return
const { raw, stringified } = require('renvy');
```

## Env file loading priority

Files on the left have more priority than files on the right:

- `renvy`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `NODE_ENV=production renvy`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

<details><summary>What `.env` files can be used?</summary>

- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.

Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
> these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI](https://docs.travis-ci.com/user/environment-variables/) or [Heroku](https://devcenter.heroku.com/articles/config-vars).

</details>

## Features

- Expands `$VAR` by default (via [dotenv-expand](https://github.com/motdotla/dotenv-expand)). **Important** escaped `\$` does not work, and is expanded to `undefined`. To disable env expansion, set environment value `NO_EXPAND=true`.
- Supports `.env.example` if the file is found in the current working directory (very similar to [dotenv-safe](https://github.com/rolodato/dotenv-safe/blob/master/index.js) - but merges environment values first, then checks)

## CLI usage

Beyond using the package as a dependency, a CLI utility is provided for testing environment values and _also_ injecting the environment variables into a command.

Assuming the package was installed locally to your project, and using [npx](https://www.npmjs.com/package/npx) to run a `.bin` command:

```shell
$ NODE_ENV=test npx renvy
> # prints entire environment loaded

$ NODE_ENV=test npx renvy NODE_ENV
> test

$ NODE_ENV=test npx renvy -- node -e "console.log(process.env.NODE_ENV)"
> test
```

### `--` Double dash to signify the end of the options

When passing `--` to `renvy` everything afterwards will be executed with the modified environment (a bit like the `foreman` command line too).

## Naming

`renvy` is weird, but it comes from it previously being called [`@remy/envy`](https://www.npmjs.com/package/@remy/envy) and since the `envy` namespace was gone and people feel weird about installed scoped dependencies when they belong to individuals, I slapped my first initial on the name, thus: renvy.
