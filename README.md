# BrokerLift Coding assement

`Connor Fitzgerald`

This is the repo for the brokerlift coding assesment

## Setup

First you must clone this repo using the following command:

```
$ git clone https://github.com/ConnorFitzgerald17/brokerlift.git
```

Once the repo has been cloned you can follow the `Server` setup.

# Server

## Project setup

This is the setup for the server sitde of the brokerlift coding assesment

Once you have cloned the repo yous should start with the server and run the following command in the terminal to make sure you have all neccecary depencecies.

```bash
$ npm install
```

Once that is done you should create a `.env` in the `root` of the client folder. Inside you need to create the following variable: (See email for connection string)

```
MONGO_URL=<connection_string>
```

## Running the app

After these steps have been followed you will need to run the following command in the terminal:

```bash
$ npm run start
```

# Client

## Project setup

This is the setup for the client sitde of the brokerlift coding assesment

Once you have cloned the repo and setup the server porotion, you should run the following command in the terminal to make sure you have all neccecary depencecies.

```bash
$ npm install
```

Once that is done you should create a `.env` in the `root` of the client folder. Inside you need to create the following variable:

```
VUE_APP_API_URL=http://127.0.0.1:3000
```

## Running the app

After these steps have been followed you will need to run the following command in the terminal: (This compiles and hot-reloads for development)

```bash
$ npm run serve
```
