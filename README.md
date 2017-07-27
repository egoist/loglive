# loglive

[![NPM version](https://img.shields.io/npm/v/loglive.svg?style=flat)](https://npmjs.com/package/loglive) [![NPM downloads](https://img.shields.io/npm/dm/loglive.svg?style=flat)](https://npmjs.com/package/loglive) [![CircleCI](https://circleci.com/gh/egoist/loglive/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/loglive/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> This is inspired by [headwayapp.co](https://headwayapp.co) but as a single script you can add to an HTML file.

## Install

```bash
yarn add loglive
```

## Table of Contents

<!-- toc -->

- [Usage](#usage)
- [Changelog Format](#changelog-format)
  * [Example](#example)
  * [Site name](#site-name)
  * [Changelog Title](#changelog-title)
  * [Change Type](#change-type)
- [Front Matters](#front-matters)
  * [website](#website)
- [Contributing](#contributing)
- [Author](#author)

<!-- tocstop -->

## Usage

You can simply create an `index.html` and include `loglive` there:

```html
<html>
<head>
  <title>App Title</title>
  <link rel="stylesheet" href="https://unpkg.com/loglive/dist/loglive.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/loglive"></script>
  <script>
    new LogLive({
      el: '#app'
    })
    // And that's it!
  </script>
</body>
</html>
```

Then you can start to write a `CHANGELOG.md`, by default LogLive will read from `http://your-website/CHANGELOG.md`, however you can use a custom path:

```js
new LogLive({
  el: '#app',
  changelog: '/path/to/my-changelog.md'
})
```

## Changelog Format

### Example

```md
# My Website

## Add TypeScript support (2016-07-23)

### New

- Now added Typescript support.
- Some other new stuffs.

### Fix

Fixed some babel problems.
```

### Site name

The value of `h1` heading will be used as website name:

```md
# My Website
```

### Changelog Title

Changelog title is an `h2` heading which consists of two parts, `title` and `date` and `date` is totally optional.

```md
## changelog title (date)
```

Sometime you just want to use semantic version as the changelog title:

```md
## 1.3.0 (2015-02-43)
```

### Change Type

Change type is an `h3` heading which describes the type of the change, eg: `Fix`. And it shows up like:

<img src="https://i.loli.net/2017/07/27/59797da5a89df.png" alt="change type" width="60">

By default we have pre-defined colors for specific types which include: `Fix` `Breaking` `New`, other types will get a random color.

## Front Matters

### website

You changelog is born for your product, so adding a link to your actual product is necessary:

```md
---
website: http://my-fantastic-app.com
---
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**loglive** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/loglive/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
