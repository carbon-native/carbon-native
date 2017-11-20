# Contributing to Carbon Native

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to Carbon Native and its packages, which are hosted in the Carbon Native Organization on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Setup

We use the Kitchen Sink as our test app as we create new or update existing components. Every pull request should contain not only the updated src code but also the corresponding changes to the Kitchen Sink application bundled with this repository.

```bash
./setup.sh
```

## Develop

```bash
./start
```

## Test

```bash
npm test
```

## Deploy

To deploy Carbon Native we use a shell script that ultimetely just publishes to NPM. Only specified organizations admins should have access to publish on NPM.

```bash
npm run build
./publish.sh
```