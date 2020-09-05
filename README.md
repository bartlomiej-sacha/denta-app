# My latest react project denta-app:

This is fully working React Web App with the following characteristics:

* Based on create-react-app
* Render as you Fetch Pattern
* Responsive Web Design
* [Redux](https://redux.js.org) pattern for handling application-state
* [react-query](https://github.com/tannerlinsley/react-query) for asynchronous API calls
* [ReactRouter](https://github.com/ReactTraining/react-router) for handling routes
* [Sass](https://github.com/sass/sass) for styling
* [Material-UI](https://github.com/mui-org/material-ui) for styling
* [styled-components](https://github.com/styled-components/styled-components) for styling
* [react-final-form](https://github.com/final-form/react-final-form) for form management

Main purpose of this project was to create single page application using react library, where users can create their online accounts for fictional dental clinic institution. After creating an account and logging in user can:
* check the actual news
* make an appointment with a selected doctor using calendarlike interface
* check appointment history
* find out more details about the company
* reach company by sending an email

Application makes api calls to remote server-application written also by me in Node.js/Express.js which is storing data on MySQL database hosted on https://www.hostinger.com

Users data are secured by using token verification and encrypted with password hashing function.

Live demo of this project: https://denta-app.netlify.app/

Test account: 
user name: test
password: test


Link to server project: https://github.com/sasz94/denta-app-api

## Getting this App up and running

1. Clone this repository.

2. Run 'npm i' script.

3. Create .env.local file and paste your google map api key as REACT_APP_GOOGLE_MAPS_API_KEY

3. If you want to use my api server hosted on heroku you are ready to go, otherwise clone api server project from here: https://github.com/sasz94/denta-app-api and change urls in src/data/fetch/fetch.js from https://denta-app-server.herokuapp.com/api/ to http://localhost:3001/api/

4. Run 'npm start' script.
