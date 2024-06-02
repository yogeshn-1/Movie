# About

1. This proect is made using Vite + React. And tailwind css is used for styling.
2. For state management i.e. movies list and favourite movie list, we are using redux.
3. As soon the main App components render we use asyncThunk from redux to fetch movie list from api and store the movie list.

# To run the project

1. Clone the repo using command "git clone https://github.com/yogeshn-1/Movie.git"
2. Install node package manager
3. Install required libraries - react-router-dom, react-redux, @reduxjs/toolkit
4. To install tailwind follow the framework guideline for Vite from [here](https://tailwindcss.com/docs/guides/vite).

## Environment File

The `.env` file should contain the following content:

```dotenv
VITE_BASEURL="https://dummyapi.online/api/movies"
```

# Site deployed

Project is live [here](https://startex-movie.netlify.app/)
