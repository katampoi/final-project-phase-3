# Airline Review App

## BY Mbatiany Simon Katampoi

## Table of Content
- [Description](#description)
- [Features](#features)
- [Technology_used]
- [Development](#development)
- [Setup Instructions and Technology](#technology-used)
- [License](#license)
## Description
---
Airline review app is a web application meant to enable the user to view various airlines and their reviews.
This is a Airline review app website with a front-end made using React and a backend made with Active records, Sinatra and Sqlite3. Active Record allowed us to create two models, reviews and airlines that could communicate with the tables in the Sqlite3 database with the help of migrations that I created. In each model there exists a defined Active Record associations.
Sinatra helped in creating api endpoints that could be used by React frontend to get, post, delete and update the birds and its sightings. Through the use of routing methods that Sinatra provided like **get**, **post**, **patch** and **delete**

Due to challenges in hosting and the deadline provided most methods are not fully to functionality.
The app was not succesfully hosted hence can be hosted locally.
## Features
---
A user visiting this page would be able to see:
1. A home page will include the the list of airlines available.
### Technology Used
---
- Used Visual Studio Code editor to create the front-end with _**React**_ and backend with **Active Record**, _**Sinatra**,**Sqlite3**
- **React** - help in creating interactive website
_**Active Record**_, _**Sinatra**_, _**Sqlite3**_ helped in creating the database,
### requirements:
- chrome browser/any other browser
- Internet connection
- Navigate to the git repository
- Fork  the repo using the fork button on this repository
- Git clone the forked repository to your local machine.
- Then perform the following two steps to run the Application:
#### BackEnd SetUP
- Open the backend folder on A terminal
- Then, run `bundle install` to install require gems
- run  (`bundle exec rake server`) to run the backend
#### FrontEnd SetUP
- Navigate to the frontEnd folder and open it in the terminal
- run (`npm start`) to run the applicationon the browser.
- Done..! the site is up and running locally.
## Development
---
Want to contribute? Excellent!
To enhance or contribute on the existing project, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b enhance-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -m 'Enhanced feature')
- Push to the branch (git push origin enhance-feature)
- Create a Pull Request

## License
---
MIT License
Copyright (c) [2022] [ Simon Katampoi ]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.