# React Authentication Task

## Instructions

1. Read the following steps in full before writing any code.
1. Most of the code for the UI has already been built, but is missing functionality with the backend.
1. Go through the code in the `src folder` to get an idea of the task and project structure.
1. Once you are ready, go ahead and solve the following steps.

## Task Part 1

## Register

1. Open `Register.js` component in the pages folder.
2. import the `register` function from the `api/auth.js`.
3. Use the `useMutation` hook with the `register` function by passing `userInfo`.
4. go to the `api/auth.js` file and inside the `register` function add the formData.

```js
const formData = new FormData();
for (const key in userInfo) formData.append(key, userInfo[key]);
```

- then pass the `formData` instead of userInfo to the api request
- check that the register is working by going to the users tap

## Login

1. Open `Login.js` component in the pages folder.
2. import the `login` found in the `api/auth.js` Use the `useMutation` hook with the `login` function and pass it the user info.
3. you should see the token in the response

## Maintaining Login (Local storage)

1. In `auth.js` file create a function storeToken that saves your token in the `localStorage`
2. in `login` function after getting the data use `storeToken()` to store the token in the localStorage
3. in `register` function after getting the data use `storeToken()` to store the token in the localStorage

## Logout

1. go to `auth.js` in the api folder
2. create a function `logout` that removes the token from the localStorage.

## Sending requests with the auth token attached

1. In your `api/index.js`, use your `instance` to create an interceptor using the `interceptors.request.use()` method with an anonymous function. If the token is in the localStorage then set the config.headers.authorization = token

- hint:

```js
axios.interceptors.request.use((config) => {
  const token = localStorage.get("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
```

## Protected Routes (aka cant add a new pet if not logged in ‘if going to use the pet api’)

1. create the UserContext.js in `src/context/UserContext.js`
2. hint:

```js
import {createContext} form 'react';
const UserContext = createContext()
export default UserContext;
```

3. import UserContext in `App.js`
   hint:

```js
import UserContext from './context/UserContext';
function App(){
const [user, setUser] = useState(false)
    return
<UserContext.provider value={[user, setUser]}>
// Wrap all the app with this
// ...
</UserContext>
}
```

4. in `Navbar.js` import useContext and check if the user if true or not:
   - if yes show the logout button
5. if logout button pressed call the `logout` function in `api/auth` then `setUser(false)`
