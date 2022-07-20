<div align="center">
  <img src="public/logo192.png" height="100" width="100" alt="logo"/>
  
# ***Polo Extension***
A Browser Extension which enables the users to develop a productive outlook towards day to day activities. Can be used through desktop based browsers.
</div>

## Installation

Install and Run Locally in 4 simple steps:

```bash
  $ git clone https://github.com/dev-enforced/polo-extension.git
  $ cd polo-extension
  $ npm install
  $ npm start
```

## Environment Variables

Create an .env file after the above installation in which these variables shall be attached for proper functioning of the extension.

- REACT_APP_QUOTE_API_URL=[TypeFit API](https://type.fit/api/quotes)
- REACT_APP_WEATHER_API_URL=[Open Weather Map](https://api.openweathermap.org/data/2.5/weather)
- REACT_APP_WEATHER_API_KEY= Key received after signing up on Weather Map official website
- REACT_APP_WEATHER_IMAGE_URL=[Open Weather Map Weather Image](http://openweathermap.org/img/wn)

## [Live Link](https://polo-extension.vercel.app) ✨✨

## Features

- User Onboarding Page
- Dashboard
  - Beautiful backrounds on every refresh
  - Big Clock at center. Displays time in 12hr and 24hr Format
  - Greets user according to the time of day
  - User can add Main Focus of the Day
  - Random Quote with Author on every refresh
  - Current Weather based on User's Location .
  - Option to change name of the user with auto focus reset i.e. if the name gets changed then the user would be prompted to provide a new focus for the new name.

## Built with -

- React JS and Typescript
- CSS Modules
