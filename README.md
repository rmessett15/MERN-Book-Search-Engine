# MERN Book Search Engine

Week-21 Challenge (MERN)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Suggested-Future-Development](#suggested-future-development)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This application was refactored from using strictly routing and express, to now implementing GraphQL typeDefs, resolvers and an Apollo Server. The backend uses MongoDB; it mixes Mongoose and GraphQL queries and mutations to run queries and mutations from the UI to the database.

Refactoring this application gave me a good understanding of the power of GraphQL when paired with React. It makes sense that it was developed by Facebook as it makes the routing on the front end of the code base much cleaner.

Deploying to Heroku was a massive challenge! The main hurdle was figuring out how to connect MongoDB with Heroku. To do so you must start by setting up an account through the MongoDB Cloud Atlas. Navigate to the database access tab, giving MongoDB roles atlasAdmin access, set a password and then access the correct connection string by accessing through the database tab, the connect button, and through their accessing drivers, once their, copy the connection string, hop back over to Heroku and in your setting tab add Config Vars (key: MONGODB_URI, value: mongodb+srv://<username>:<password>@cluster0.ibn4vyk.mongodb.net/?retryWrites=true&w=majority) paste the connection string in for the value filling in your username and password in the appropriate locations.

## Live URL

[Link to live URL](https://mern-book-search-engine15-94a7abdc0a8a.herokuapp.com/)

## Screenshots

![Screenshot1-week-21-challenge](https://github.com/rmessett15/MERN-Book-Search-Engine/assets/120127903/00ad1f9a-1ae8-4d62-b649-6fd86410b1e8)

![Screenshot2-week-21-challenge](https://github.com/rmessett15/MERN-Book-Search-Engine/assets/120127903/75a25cc3-0bb7-4d61-bd56-31d2ed750867)

![Screenshot3-week-21-challenge](https://github.com/rmessett15/MERN-Book-Search-Engine/assets/120127903/6c50160d-5c34-43b9-8bfb-81f793110ee1)

![Screenshot4-week-21-challenge](https://github.com/rmessett15/MERN-Book-Search-Engine/assets/120127903/ea5a3b3d-a6c2-483d-836d-80e2dc474076)

## Technologies Used

This application is powered by JavaScript. It uses React.js (v16.13.1), Node.js (v16.19.1), Express.js(v4.17.2), GraphQL(v15.8.0), and ApolloServer(3.11.1). CSS and Bootstrap (v5.2.3) were utilized to create the overall styling of the user interface.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Installation

- To make changes to the code base, clone the repo (https://github.com/rmessett15/MERN-Book-Search-Engine), run npm i within the root directory of the terminal, then enter npm run develop -> you will then be taken to a live server running the site where if edits are made to the code base they can be seen in real time.

- Users can also feel free to access the live application directly by visiting the Heroku link (https://mern-book-search-engine15-94a7abdc0a8a.herokuapp.com/).

## Credits

Credits are attributed to the tutor I worked with, Joem Casusi, who helped me understand the way to use GraphQL mutations and queries and replace the currently in place routes and to AskBCS who helped me trouble shoot Heroku deployment issues.

## Features

Features of the site include Reacts ability to easily create a one page application that appears as though it is many pages. Users can easily navigate the site, search books using the implemented GoogleAPI, and save or delete books to their profile.

## Usage Information

This application is very user intuitive, just visit the site (https://mern-book-search-engine15-94a7abdc0a8a.herokuapp.com/), navigate through different pages using the links in the nav-bar, and view desired content.

## Suggested Future Development

- Dark Mode Toggle
- Continued display and UI development
- Adding pages where users can interact with other users profiles 
- Add additional CRUD operations
- Including unit testing

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
