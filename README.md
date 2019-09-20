## About the project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Some of the libraries/tools used on it are:

- [SASS](https://sass-lang.com/)
- [react-router](https://www.npmjs.com/package/react-router)
- [classnames](https://github.com/JedWatson/classnames)
- [momentjs](https://momentjs.com/)

# Project setup

- Clone this repository.
- `cd` into the cloned repo.
- checkout resoltion branch.
- Execute `yarn install`

## Running locally

- Execute `yarn start`

## Running in production

- Execute `yarn build`

The above command will generate a build folder inside the repository that you can deploy to your server of choise.
If you are using npm version 5.2 or higer you can just cd into the build directory and execute `npx serve`.

# Conventions used

To name the CSS class I am sticking to [BEM](http://getbem.com/naming/) as much as possible.

# Possible improvements

- Move texts to a file and add some kind of library to help with i18n.
- Support months beyond the current year.
- Add unit testing.
- Probably some others.

# Additional features

This project is responsive.

# Live demo

[Here](http://racial-throne.surge.sh/).

NOTE: for some reason you need to delete the /calendar part of the URL to load the page.

# Known issues

- When development server starts, a blank page is loaded, you need to reload the page to see the calendar. I did not have time to research on it.
