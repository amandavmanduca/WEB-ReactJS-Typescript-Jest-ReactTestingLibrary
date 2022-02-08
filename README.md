# WEB-ReactJS-Typescript-Jest-ReactTestingLibrary

## 1. Project Description
The following project has a device section contempled by a simplified admin template web system.

Having the functionalities bellow by consuming a REST API with Axios:
```
list device
create device
update device
delete device
```


One of the projects purpose was to test its components in order to assure a proper result of their functionalities.

Tests are made in each of the form components: `button`, `text input`, `mask input` and `select input`.

As well as on the `device form` as a whole.

Tests were created using Jest and React testing library.


## 2. How to Install and Run the Project
### 2.1 Access Backend
Repository: [API-nodeJS-express-jest-supertest](https://github.com/amandavmanduca/API-nodeJS-express-jest-supertest)

### 2.2 Configuring and installing the project
- Create `.env` file and add access to API by configuring `REACT_APP_API_URL` URL

To install dependencies:

```
yarn install
```

### 2.3 Running the project
```
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 2.4 Running tests
```
yarn test
```

## 3. Tecnologies
- React JS
- Typescript
- Jest
- React Testing Library

### 3.1 Libs
- React final form
- Imask
- React toastify
- CSS Modules
- Axios

### 3.2 Patterns
- Based on Atomic Design