# React Counter App

A minimal React app (Counter component) with unit tests using Jest + React Testing Library.

## Setup

```bash
npm install
```

## Run the app

```bash
npm start
```

## Run tests

```bash
npm test
```

or, for a one-shot CI run:

```bash
npm run test:ci
```

## Structure

```
src/
  App.js             - root component
  Counter.js          - counter component (increment/decrement/reset, configurable step)
  Counter.test.js     - unit tests for Counter
  index.js            - app entry point
  setupTests.js       - jest-dom setup
public/
  index.html
```

## What's tested

- Default initial render (count = 0)
- Custom initial value
- Increment / decrement behavior
- Reset behavior
- Custom step size
# ci-cd-repo
