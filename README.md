# PARTY WALL

## Description

Party Wall allows users to share their items (food, drinks) they want to sell
at the parties. Food has its name, description and weight. Drink has its
name and volume. Both drink and food have price and quantity.

## Functionality

### As an anonymous user you can:
- login/register using username and password


### As an authenticated user you can:
- see one list of items of both types: food and drinks for all users
- create a new item (both types)
- remove item

## Setup

To run this project `.env` file is required to be placed in `frontend`. It should contain your firebase application config, which is required for `SIGN UP/IN` functionality to work.

### .env file structure
```javascript
{
  REACT_APP_FIREBASE_KEY=/YOUR_KEY/
  REACT_APP_FIREBASE_DOMAIN=/YOUR_DOMAIN/
  REACT_APP_FIREBASE_PROJECT_ID=/YOUR_PROJECT_ID/
  REACT_APP_FIREBASE_STORAGE_BUCKET=/YOUR_STORAGE_BUCKET/
  REACT_APP_FIREBASE_APP_ID=/YOUR_APP_ID/
  REACT_APP_API_MOCK_PORT=/API_MOCK_PORT_OF_YOUR_CHOICE/
}
```

[HMU](mailto:szymon@glab.eu?subject=Party%20wall%20.env%20file%20request&body=Can%20you%20please%20share%20.env%20file%20required%20for%20Party%20wall%20aplication%20available%20on%20your%20github.) with email, so I will navigate you how to get it.

### How to start application?

To run application you need to:
- move to `frontened` directory
- install packages `yarn install`
- start API mock server (`yarn json-server --port /API_MOCK_PORT_OF_YOUR_CHOICE/`)
- start frontened application (`yarn start`)




