<div align="center">

### Plexis: Lo-fi, powerful, community-driven string manipulation library.

</div>

This is the main monorepo codebase of Plexis.js a production-ready string manipulation libray that's community driven.

## What is Plexis?

### Vision

For the past few years managing, contributing or even starting an open-source project could be hard, especially for newcomers. Plexis was born and driven by the JavaScript community. Our initial goal is to provide a production-ready set of utilities and help people understand how an open-source project is maintained. Plexis is driven by our contributors and it should always stay that way.

You may have noticed that there are some functions missing and there are [lots of open issues](https://github.com/plexis-js/plexis/issues) in our repo. That's because we want to allow people to create through the process of learning. Plexis grows with the community and we want to provide a friendly environment for people to get creative, have fun and expand their expertise into JavaScript.

**Plexis aims to be the best and most flexible library for string operations in the JavaScript and also encourage everyone to learn.**

Do you want to get your hands dirty? Learn more about [contributing](#contributing).

### Docs

- [Installing](#installing)
- [Using Plexis](#using)
- [API](/docs/pages/api.md)
- [Contributing](#contributing)
- [Ground rules](#ground-rules)
- [What you will learn by contributing]('#what-you-will-learn-by-contributing')
- [Codebase and technologies](#codebase-and-technologies)
- [Great, how do I get started?](#great-how-do-i-get-started)
  - [How to contribute](#how-to-contribute)
  - [Creating a new issue](#creating-a-new-issue)
  - [Setup your environment](#setup-your-environment)
  - [Pick an open issue](#pick-an-open-issue)
  - [Writing code for Plexis](#writing-code-for-plexis)
  - [Naming conventions](#naming-conventions)
  - [Creating a new package](#creating-a-new-package)
  - [Pull requests](#pull-requests)
  - [Common issues and pitfalls](#common-issues-and-pitfalls)
  - [Learning resources](#learning-resources)

## Installing

You may install Plexis by the registry using: `npm install --save plexis`. Plexis is a mosaic of tiny utility functions, each one lives within its own package inside the monorepo. Thus you may use just a tiny slice of Plexis by installing individual packages:

```bash
npm install @plexis/without-diacritics @plexis/toPred
```

## Using

Plexis utilities can be directly been used, Plexis is production-ready and made for Node.js as well as the web. You can directly include and use any module from Plexis inside your project.

```javascript
import {toPred} from 'plexis';
console.log(toPred('A')); // B
```

## Contributing

**We welcome any and all contributions from the community!** Plexis is made, driven and maintained by the community. We want to offer everyone a fair chance to make their first steps into open-source and learn through the journey.

## Ground rules

All conversations code pieces on Plexis agree to our underlying code of conduct. This code of conduct also applies to all conversations that happen within our contributor community here on GitHub. We expect discussions in issues and pull requests to stay positive, productive, and respectful.

## What you will learn by contributing

The basic idea behind Plexis is to help people understand and learn how to use the fundamentals of JavaScript. By contributing you get into:

- Mastering JavaScript ES6.
- Understanding how functions and closures work.
- Understanding how strings and arrays work in JavaScript. You are gonna find yourself using `Array.prototype.reduce()` or `Array.prototype.map()` like a lot :)

- Understanding how the NPM registry works, the anatomy of `package.json` and every single part of creating and publishing a package.

- Working with pull requests, forks, GIT and the whole workflow of an open-source project.
- Learning how unit testing works.
- Taking a look how a CI/CD workflow works along with the NPM registry.

## Codebase and technologies

Ok, now let's talk about the architecture of this monorepo:
Every single utility function exists as an independent package, everything comes together and gets bundled into a single source of truth, the main Plexis package.

Also, is a list of all the technologies and services we use:

- **Lerna**: used for publishing and managing the monorepo packages.
- **Babel**: used as a JavaScript compiler.
- **Jest**: used for testing.
- **Yarn**: used as a package manager.
- **JSDoc**: used as a documentation manager.
- **CircleCi**: used as a CI/CD provider.
- **Commitlint**: used for linting our commit messages.
- **Prettier**: used for code linting and formatting.

### Folder structure

```sh
plexis/
├── .circleci         # CI/CD config
├── .circleci         # CI/CD config
├── .package-template # A sample package template
├── docs              # Our official documentation
└── packages          # The heartbeat of plexis
```

## Great, how do I get started?

Plexis has a [Code of Conduct][]. Please review and help enforce this code of conduct to help us foster an open and inclusive project.

### How to Contribute

First things first, thanks so much! Feel free to contribute by opening and commenting on issues, helping answer questions, updating or improving our documentation, or opening a pull request. For quick bug fixes or PRs that address an open issue, feel free to open a PR. You can suggest API changes or dig through your codebase and make us a gift with that precious function of yours.

Even the a tiny piece of code, knowledge or even a few minutes you can spare for Plexis are really important for us.
[code of conduct]: ./CODE-OF-CONDUCT.md

### Creating a new issue

We have setup proper GitHub issue templates with guidelines about asking for features, fixing a bug or even questions. We are waiting for your ideas to start flowing.

### Setup your environment

Ok, so you found the perfect issue for getting started.
You can set up your working environment simply by installing `git`, `Node.js`, `npm` and `yarn`. Use your favorite IDE and you are ready to rock and roll. We prefer using VSCode along with a few extras:

- The _prettier_ extension for code formating
- The _Document this_ extension for JSDoc
- The _Jest_ extension for writing and managing tests.

Now you can locally clone the project as: `git clone git@github.com:plexis-js/plexis.git`. Use yarn to install any missing dependencies simply by typing `yarn` in your CLI.

### Pick an open issue

Plexis is all about teaching people. You can found lots of open issues with different types of difficulty. Usually there are labels that they can help you find the best open issue for you. Find the best issue for you and let's get started.

Usually, you will find yourself creating a new package or as it is said "a feature request", thus we are trying to provide as much information, test cases or examples as possible.

### Writing code for Plexis

Plexis is using ES6 syntax at full speed. Plexis also uses the monorepo architecture. Every utility function is also a single entry package under the `@plexis` organization.
Some prior knowledge of string operations, regular expressions or array operations are nice to have but certainly not required, we will learn and grow together.

### Naming conventions

Each utility is named using the camelCase convention. Since our utilities are used for string operations you will spot a pattern of missing verbs upon naming our methods.

For example, a utility function that converts a string to camelCase can be named as `toCamelCase`, which references to `text => transformToCamelCase => output`. For convenience reasons the main Plexis packages also exports a few aliases like `dasherize` or `titleize`.

### Creating a new package

If you want to create a new package we are on a great path 🎉.
You need to take a few additional steps. Let's assume that you need to create a new package for the `cameCase` utility.

First thing first we need to create a new `@plexis` packages using `lerna create @plexis/came-case`. \_Note: NPM does not allows uppercase characters for packages`.

You can use `lerna create` for creating a new package, more infos can be found [here](https://github.com/lerna/lerna/tree/master/commands/create). You should include all the available information for the new package like `name`, `version`, Alternatively, we are providing [a template for new packages](/..package-template). Keep in mind that the name of package folders should be in camelCase and package.json details should be aligned with the other packages and `lerna.json`. For packages with dependencies to other `@plexis` packages, you can use `yarn bootstrap` which under the hood uses `lerna bootstrap`, learn more about bootstaping [here](https://github.com/lerna/lerna/tree/master/commands/bootstrap).

Afterward, create an `src` and a `test` folder, place your files and write the appropriate test cases for unit testing.

_Note: Usually each package is a single function, thus the coverage limit is super easy to reach out, still, sometimes, we need to cover a lot of different cases due to feature's requirements._

A sample folder for `camelCase` would look like this:

```sh
packages/
├── ...
├── ...
└── toCamelCase/
    ├── src/
    ├── test/
    └── package.json
```

Finally, you should create a JSDoc comment block for your package, providing a proper description, some code examples and documenting the parameters passed through the function. You shall also create or update the `README.md` or any related documentation files.

Last but not least you shall update the main `plexis` package with exports all the submodules. Since the main `plexis` module uses snapshots for testing, you need to run `yarn test -u` in order to update the snapshot testing.

### Pull requests

In a nutshell, to submit a pull request, follow these steps:

1. Fork and clone this repo,
2. Create a branch for your changes.
3. Install dependencies with `yarn`.
4. Ensure tests are passing by running `yarn test`. Update any snapshots using `yarn test -u`.
5. Update the docs or `README.md` file if required. .
6. If you're fixing a bug, it's recommended to write a failing test before writing any code.
7. Make changes locally and commit them.
8. Try to make sure tests still pass and that there's great coverage and clear test cases.
9. Push your branch to origin.
10. Open a pull request in this repository with a clear title and description and link to any relevant issues
11. Wait for a maintainer to review your pull request.

### Common issues and pitfalls

- Lerna is a powerful tool, try to get through the documentation, make yourself familiar with the commands and follow the appropriate steps as described above.
- Yarn can be a lifesaver for dependency management, try to avoid mixing `npm` and `yarn`.
- Commitlint can be frustating. Please use it all consciously as it provides a consistent `git` history.

- If you don't know how to do something, just ask for help. We got your back!

### Learning resources

Here are some learning resources, free tutorials and books:

#### ES6

- https://www.tutorialspoint.com/es6/index.htm
- https://2ality.com/
- https://exploringjs.com/

#### Jest

- https://www.youtube.com/watch?v=7r4xVDI2vho
- https://blog.logrocket.com/testing-with-jest-from-zero-to-hero-85ce0e9cc953/

#### Lerna

- https://github.com/reggi/lerna-tutorial
- https://www.youtube.com/watch?v=p6qoJ4apCjA
- https://codeburst.io/monorepos-by-example-part-1-3a883b49047e
