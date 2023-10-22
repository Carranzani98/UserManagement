import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core'
import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'
import './App.css'

import Loader from './components/Loader/Loader'
import store from './redux/store'

const Landing = React.lazy(() => import('./views/Landing/Landing'))
const UserProfile = React.lazy(() => import('./views/UserProfile/UserProfile'))

const qredColor: MantineColorsTuple = [
  '#e6fded',
  '#d7f5dd',
  '#b1e9be',
  '#87db9a',
  '#64d07d',
  '#4ec96a',
  '#40c660',
  '#30ae4f',
  '#269c45',
  '#138637',
]

const theme = createTheme({
  colors: {
    qredColor,
  },
})

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/profile/:userId',
      element: <UserProfile />,
    },
  ])

  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <React.Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </React.Suspense>
      </Provider>
    </MantineProvider>
  )
}

export default App
