<h1 align="center">@gcoguiec/tsconfig</h1>
<br>
<p align="center">
  <img src="https://github.com/gcoguiec/tsconfig/blob/main/.github/typescript-logo.png?raw=true" width="150" alt="TypeScript Logo"/>
</p>
<p align="center">
  A strict TypeScript configuration.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@gcoguiec/tsconfig">
    <img src="https://img.shields.io/github/package-json/v/gcoguiec/tsconfig?filename=packages%2Ftsconfig%2Fpackage.json&style=flat-square" alt="Version"/>
  </a>
  <a href="https://github.com/gcoguiec/tsconfig/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gcoguiec/tsconfig/ci.yml?branch=main&label=ci&style=flat-square" alt="CI Status"/>
  </a>
</p>

<hr>

## Table of Contents

- [Getting Started](#getting-started)
- [See Also](#see-also)
- [License](#license)

## Getting Started

### Install

```bash
pnpm add -D @gcoguiec/tsconfig
```

### Register the configuration with [TypeScript](https://www.typescriptlang.org/)

Edit your [`tsconfig.json`](https://www.typescriptlang.org/tsconfig/) configuration file (you may have to create the file at your project root if it's missing) with the following :

```json
"extends": "@gcoguiec/tsconfig"
```

## See Also

Other [TypeScript](https://www.typescriptlang.org/) configurations based on this package you may want to look at:

- [`tsconfig-vite-vue`](https://github.com/gcoguiec/tsconfig/tree/main/packages/tsconfig-vite-vue)

## License

This package is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
