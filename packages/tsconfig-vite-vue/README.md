<h1 align="center">@gcoguiec/tsconfig-vite-vue</h1>
<br>
<p align="center">
  <img src="https://github.com/gcoguiec/tsconfig/blob/main/.github/typescript-logo.png?raw=true" width="150" alt="TypeScript Logo"/>
</p>
<p align="center">
  A strict TypeScript configuration for a <a href="https://vitejs.dev/">Vite</a> <strong>+</strong> <a href="https://vuejs.org/">Vue</a> ❤️ stack.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@gcoguiec/tsconfig">
    <img src="https://img.shields.io/github/package-json/v/gcoguiec/tsconfig-vite-vue?filename=packages%2Ftsconfig%2Fpackage.json&style=flat-square" alt="Version"/>
  </a>
  <a href="https://github.com/gcoguiec/tsconfig/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gcoguiec/tsconfig-vite-vue/ci.yml?branch=main&label=ci&style=flat-square" alt="CI Status"/>
  </a>
</p>

<hr>

## Table of Contents

- [Getting Started](#getting-started)
- [License](#license)

## Getting Started

### Install

```bash
pnpm add -D @gcoguiec/tsconfig-vite-vue
```

### Register the configuration with [TypeScript](https://www.typescriptlang.org/)

Edit your [`tsconfig.json`](https://www.typescriptlang.org/tsconfig-vite-vue/) configuration file (you may have to create the file at your project root if it's missing) with the following :

```json
"extends": "@gcoguiec/tsconfig-vite-vue"
```

## License

This package is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
