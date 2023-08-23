import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import List from '../pages/manages/List'
import StarList from '../pages/manages/StarList'
import GarbageList from '../pages/manages/GarbageList'
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
      // 问卷列表
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <StarList />,
          },
          {
            path: 'garbage',
            element: <GarbageList />,
          },
        ],
      },
      // 问卷编辑
      {
        path: 'question/edit/:id',
        element: <Form />,
      },
      // 问卷统计
      {
        path: 'question/stat/:id',
        element: <Form />,
      },
      {
        path: '*', // 404
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*', // 404
    element: <NotFound />,
  },
])
export default routerConfig

export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_LIST_PATHNAME = '/manage/list'
