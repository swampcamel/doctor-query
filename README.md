# Doctor Query

#### Epicodus JS & API Call Project, 10/12/2018

#### By Dan Mace

## Description

Doctor Query is a JS sandbox practicing the use of API calls on BetterDoctor API.  A user can use this app to enter a medical condition or a doctor's name and have a list of doctor's from the Portland area returned with information on each doctor.  Further development may include the ability to enter a location besides Portland, a specialty, a list of recently viewed doctors, a list of related doctors, and/or have doctor's offices plotted to a map.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Produces a list of docto's who can treat a user's medical condition | Medical Condition | List of doctors who can treat that |
| Displays an error if the API call fails | Medical Condition | Error Code and Message |
| Displays a message if there are no results for the given search term | Search Term | "We couldn't find any results for your search." |
| Displays meta information on each doctor pulled from the API | Search Term | Name, Location, Contact Info, Website and Availability for each doctor |
| Produces a list of doctors with an entered name | Name | List of doctors with that name |
| (stretch goal) Produces a list of doctors in a given location | City and State/Region | List of doctors in that region |
| (stretch goal) Produces a list of doctors for a given specialty | Specialty | List of doctors with that specialty |
| (stretch goal) Logs a list of doctors a user has produced | Search Terms | Recently Viewed Doctors |
| (stretch goal) Produces a list of similar doctors for an examined doctor | Doctor | List of doctors |
| (stretch goal) Plots office locations on a map | Search Terms | Map Pins to put on generated map|

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo

* Create a new `.env` file in the app's root directory
* Add following line, replacing the bracketed area with your API Key (no brackets).
$ exports.apiKey=[your-api-key]

* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma
* BetterDoctor API

## Links

* https://developer.betterdoctor.com/
* https://github.com/swampcamel/doctor-query

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Dan Mace**
