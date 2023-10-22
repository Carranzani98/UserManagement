# React User Profile Management Application

This application is a demonstration of user profile management, constructed using a blend of well-established libraries to achieve a balance of efficiency, and customization. It's crafted with technologies like React, Redux, Mantine, Axios, TypeScript, ESLint, Prettier, and notably, Vite for an enhanced development experience.

## Key Features and Technologies

### React with TypeScript
Utilizes React for building user interfaces combined with TypeScript to introduce static typing, facilitating a more reliable and error-resistant code.

### Mantine
[Mantine](https://mantine.dev/) accelerates development speed, offering a collection of pre-designed components which are both functional and aesthetically pleasing.

### Custom Components
A custom `Input` component, found in the `components/input` directory, is developed to showcase the skill of creating and styling components from the ground up.

### Redux with Redux Toolkit
[Redux](https://redux.js.org/) is implemented for efficient state management, while [Redux Toolkit](https://redux-toolkit.js.org/) simplifies many common Redux use cases.

### Axios
[Axios](https://axios-http.com/) aids in performing HTTP requests to fetch and update user data.

### ESLint and Prettier
Incorporates [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to uphold code quality and consistency across the project.
I essentially use ESLint and Prettier to have all the code in the same format since I am used to following certain linting rules.

### Vite
[Vite](https://vitejs.dev/) is a front-end build tool that significantly improves the development experience. It is chosen for its fast development server start-up and lightning-quick rebuilds. With features like hot module replacement and optimized builds, Vite makes the entire process more efficient and enjoyable.

### Lazy Loading and React Suspense
To optimize performance, the application implements lazy loading and React Suspense. This approach ensures that components are loaded only when needed, improving the initial load time and overall user experience.

## Application Structure
The application contains several key directories and files.
- **App.tsx**: The main entry point of the application.
- **views**: Contains the main pages of the app, including the Landing and User Profile pages.
- **hooks**: Contains two custom hooks.
- **redux**: Holds the Redux store and slices.
- **components**: Includes custom components.
- **utils**: Contains utility functions, including validations.
- **assets**: Holds static assets like images (Qred Logo).

## Custom Hooks

### `useFetchUser`

This custom hook is designed to fetch user data by user ID. It dispatches the `fetchUserById` action and provides the selected user's data, loading status, and any potential error. The hook automatically triggers the data fetching upon component mount and whenever the `userId` changes.

### `useHandleSubmit`

This hook handles the submission of the user form, including validations for email and phone number. It dispatches the updateUser action if the validations pass.

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Steps

1. Clone the repository:
    ```sh
    git clone [https://github.com/Carranzani98/UserManagement.git](https://github.com/Carranzani98/UserManagement.git)
    cd UserManagement
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server with Vite:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Usage

On the landing page, users can be selected from a dynamically fetched list. Each selection redirects to the user’s detailed profile page, enabling view and edit functionalities. Built-in validations for email and phone number ensure data integrity.

## Feedback

Please feel free to reach out or open issues.

Thank you for reviewing the application!
