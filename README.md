# cognito-nodejs

> 

## About

This project uses a simple NodeJS app to authenticate trough AWS Cognito

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4, 5.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/cognito-nodejs
    npm install
    ```
3. Make a copy of `.env.sample` file and paste it on a new file name `.env` at the root of the project. It should look like this:
   ``` 
   PORT=3030
   COGNITO_POOL_ID=<YOUR COGNITO_POOL_ID>
   COGNITO_CLIENT_ID=<YOUR COGNITO_CLIENT_ID>
   COGNITO_POOL_REGION=<YOUR COGNITO_POOL_REGION>
   AUTH_COOKIE_NAME=<YOUR AUTH_COOKIE_NAME>
   ```
4. Replace the fields on `.env` to the one corresponding to your project
5. Start your app

    ```
    npm start `server.js`
    ```

