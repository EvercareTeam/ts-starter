# Typescript Starter Kit

A starter kit for working with Typescript build pipelines.

## Monorepo

### Lerna + Yarn Workspaces

Lerna adds utility functionality on top of Yarn Workspaces for working with multiple packages. Yarn workspaces make it so that all dependencies can be installed together, making caching and installing faster. It allows us to easily release dependencies on NPM with a single command, automatically updates the package.json of sibling dependencies when a dependency version changes, and generally makes installing, versioning, and publishing a painless experience.

### Cross packages transpile

This monorepo starter is demonstrating how a Typescript package to depends on other packages with Typescript's [project references feature](https://www.typescriptlang.org/docs/handbook/project-references.html), when you build a package, their dependencies will build as well.

@ts-starter/crud/tsconfig.build.json

```json
"references": [
    {
      "path": "../types"
    }
  ],
```

_Caveat_

Project reference only works with `tsc --build` which means it doesn't apply to `ts-node` while development.

## Test

```shell
npm run test
```

## TODOs

- [x] for NodeJS (master branch)
- [x] for Monorepo + NestJS + Typeorm(monorepo branch)
- [ ] for React
- [ ] for NextJS
- [ ] for Vercel + NextJS
- [x] for Vercel + NodeJS (vercel branch)
