# Introduction

I conducted a workshop on refactoring legacy code using the Gilded Rose kata. This repo is a suggested solution for the Gilded Rose kata in JavaScript with Jest.

This solution uses the strangler fig pattern to refactor the code and makes use of feature toggles to make it easy to rollback changes in case of bugs.

This solution is also broken up into stages with each commit labeled with a tag for ease of navigation.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## Showing suggested solution

To see all tags

```sh
git tag -n
```

To checkout a particular commit tag

```sh
git checkout tags/step_01
```

To tag a commit

```sh
git tag <tag_name> <commit_hash>
```

To see the abbreviated commit hashes

```sh
git log --pretty=oneline --abbrev-commit
```

Remember to also push tags to the remote repository

```sh
git push origin <tag_name>
```
