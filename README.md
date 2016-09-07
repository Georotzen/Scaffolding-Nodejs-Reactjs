# based on the project `create-react-app` and `food-lookup-demo`

This project is based on the project `create-react-app` and `food-lookup-demo` incorporating a Node Express API server and integrating a database in mongodb also added internationalization with formatjs.

### Detailed blog post

I have a [detailed blog post](https://jhonfredynova.blogspot.com.co/2016/09/fullstack-mongodb-nodejs-reactjs-formatjs-app.html) that explains this repository.

## Running

Before running you must configure the environment vars on the file `.env` that is localized on the root at project.

```
git clone https://github.com/jhonfredynova/Scaffolding-Nodejs-Reactjs.git
cd Scaffolding-Nodejs-Reactjs
npm i
npm start
```

## Overview

`create-react-app` configures a Webpack development server to run on `localhost:5000`. This development server will bundle all static assets located under `web/src/`. All requests to `localhost:3000/api/**` will proccessed for the API development with Express.

This setup uses [node-foreman](https://github.com/strongloop/node-foreman) for process management. Executing `npm start` instructs Foreman to boot both the Webpack dev server and the API server.
