# Movie125
### based on themoviedb: https://www.themoviedb.org/
### For dev and API documentation: https://developers.themoviedb.org/3/getting-started/introduction
## Visit Now 👉 https://movie-app-phi-wine.vercel.app/
## Screen Shots
![ss 1 1](https://user-images.githubusercontent.com/61433385/202997040-c9507ad6-5031-4360-9836-0427fd94c5f7.png)
![ss 1 2](https://user-images.githubusercontent.com/61433385/202997623-2d15354e-95e5-43ea-8e4e-af9f7ead3753.png)
![ss 2](https://user-images.githubusercontent.com/61433385/202996556-e88f0c90-4c9e-4003-995b-e10eb4db92c3.png)
![ss 3](https://user-images.githubusercontent.com/61433385/202998231-c7b16f16-3e21-41f8-9956-859ebbf92f40.png)
![ss 7](https://user-images.githubusercontent.com/61433385/203423437-e9f215af-c861-460e-9e65-2cf38c69963b.png)
![ss 9](https://user-images.githubusercontent.com/61433385/203423454-52ffd90e-7cc5-40b6-80f1-7c04038eec6a.png)
![ss 8](https://user-images.githubusercontent.com/61433385/203423469-6d354f17-8b15-4bc7-9bb3-d66f723c9747.png)
![ss 6](https://user-images.githubusercontent.com/61433385/203423474-6058a72c-5ad6-4dc3-ae4e-29a3f03ac8a3.png)

## Authentication API Documentation
### Note: the Favorites are runtime based & the search in not working as they are not provided by the APIs
### Users Model:
  1) first_name: The first name of the user, defined by the user 
  2) last_name: The last name of the user, defined by the user 
  3) email: The email of the user, defined by the user 
  4) password: The password of the user, defined by the user 
  5) age: The age of the user, defined by the user 

### BASE URL = 'https://route-egypt-api.herokuapp.com';

```
1- 
Endpoint: /signup 
Method: POST 
JSON Format: 
{ 
  "first_name":"Ahmed", 
  "last_name":"Ali", 
  "email":"ahmedAli@gmail.com", 
  "password":"Ahmed@123", 
  "age":"23" 
} 

2- 
Endpoint: /signin 
Method: POST 
JSON Format: 
{ 
  "email":"ahmedAli@gmail.com", 
  "password":"Ahmed@123", 
} 

3- 
Endpoint: /signOut 
Method: POST 
JSON Format: 
{ 
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJf aWQiOiI2MDA1YTA5MjlhMmJiMDA2NzAzM2FhMGYiLCJmaXJzdF9uYW1lIjoiQWhtZWQiLCJsYXN0X25hbWUiOiJBYmQgQWwtTXV0aSIsImVtYWlsIjoiYWhtZWRtdXR0aUBnbWFpbC5jb20iLCJhZ2UiOjIzLCJpYXQiOjE2MTA5ODE2NjR9.En_GnIB7mk7HiaUuedf0c0PseYaaL6prBMF1vn1pyLI", 
} 
```


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
