# Libremo

This repository is a front end for [Libremo](https://github.com/arturjzapater/libremo). It is built in JavaScript and it uses [Redux](https://redux.js.org/) for state management and [React](https://reactjs.org/) for view management.

## Prerequisites

- Node (>= 13)
- A running version of [Libremo's back end](https://github.com/arturjzapater/libremo)

## Set Up

Clone the project and install its dependencies

```bash
git clone git@github.com:arturjzapater/libremo-frontend.git
cd libremo-frontend
npm i
```

Update [config.json](config.json) and set the following fiels:
- `backend` to your back end's URL
- `port` to the port where you want to run the application (by default, it's 3000)

Start webpack-dev-server

```bash
npm start
```