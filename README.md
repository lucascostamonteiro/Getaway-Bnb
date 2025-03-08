# Welcome to Getaway-Bnb!
## Overview
[Getaway](https://getaway-bnb.herokuapp.com/) is website where users can find, list, and review rental places located in Brazil.


![image](https://user-images.githubusercontent.com/79651942/159957451-078a626a-ca79-4f8a-bdc1-5f04537251be.png)

## Architecture
Getaway is built on a React frontend with a Flask backend, using PostgreSQL as a database.

## Technologies Used
* Frontend
  - React
  - Redux
  - JavaScript
  - HTML
  - CSS

* Backend
  - Flask
  - Python
  - PostgreSQL
  - SQLAlchemy

## Getaway Setup

1. Clone this repository (only this branch) : `git clone https://github.com/lucascostamonteiro/Getaway-Bnb`

2. Install dependencies : `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

3. Create a .env file based on the example with proper settings for your development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your .env file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

* ` pipenv shell`
* ` flask db upgrade`
* ` flask seed all`
* ` flask run`

6. To run the React App in development, checkout the README inside the react-app directory.

## Features
### All listings page
* User can view all available listings after the clock the 'Discover Brazil' button in the home page.

![image](https://user-images.githubusercontent.com/79651942/159957730-a8fd3936-119f-47ab-8f5a-5a6aec690f6f.png)

### My listings page
* User can view their listings by clicking on the top right corner menu.

![image](https://user-images.githubusercontent.com/79651942/195226215-c2e2ea26-646a-4635-9d34-780c8ce57077.png)


### Listings details page
* By clicking in the image listing, a user can view details and reviews for that listing.
![image](https://user-images.githubusercontent.com/79651942/159958070-7a8d5bd1-2e8f-4547-8f2d-caee3b9f2953.png)
