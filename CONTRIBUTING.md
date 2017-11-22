# Contributing to Carbon Native

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to Carbon Native and its packages, which are hosted in the Carbon Native Organization on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

**Notes on Contribution**

As you create new or update existing components you need to write a test for them and fit a demo of them into the Kitchen Sink app.

**Notes on Structure**

You can find the raw Carbon Native components under `./src` the Kitchen Sink demo app screens can be found under `./screens` and the tests for both `src` and `screens` can be found under `__tests__`.

**Notes on Deployment**

To deploy Carbon Native we use a shell script that ultimately just publishes to NPM. Only specified organizations admins should have access to publish on NPM:
- Tyler Buchea
- Josh Buchea

To deploy the Kitchen Sink app to Expo you will need the Expo CLI tool `npm install -g exp` after that you can run `exp publish`. Only specified organizations admins should have access to publish on Expo:
- Tyler Buchea
- Josh Buchea

## Setup

```bash
./setup.sh
```

## Develop

```bash
./start.sh
```

## Test

```bash
yarn test
```

## Deploy

```bash
npm run build
./publish.sh
```