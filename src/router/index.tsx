import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Test from '../pages/Test'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import ListDemo from '../pages/manages/ListDemo'
import Form from '../pages/Form'

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'test/:id', // params
        element: <Test />,
      },
      {
        path: 'list',
        element: <ManageLayout />,
        children: [
          {
            path: '',
            element: <ListDemo />,
          },
        ],
      },
      {
        path: 'form',
        element: <Form />,
      },
    ],
  },
  {
    path: '*', // 404
    element: <NotFound />,
  },
])
export default routerConfig
