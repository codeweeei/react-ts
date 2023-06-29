import React from 'react'
import ListDemo from './pages/ListDemo'
import Test from './pages/Test'
import Home from './pages/Home'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

function App() {
  // const navigate = useNavigate()
  // const navigateTo = (url: string) => {
  //   navigate(url)
  // }
  return (
    <div>
      {/* 声明式导航：link 组件导航 */}
      <Link style={{ marginRight: '20px' }} to="/list">
        List
      </Link>
      {/* <Link to='/test'>Test</Link> */}
      <NavLink style={{ marginRight: '20px' }} to="/test">
        Test
      </NavLink>
      {/* 编程式导航 useNavigate() */}
      {/* <a href="#" style={{marginRight: '20px'}} onClick={() => {navigateTo('/list')}}>List</a>
      <a href="#" style={{marginRight: '20px'}} onClick={() => {navigateTo('/test')}}>Test</a> */}
      {/* Routes组件方式：注册路由 */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list" element={<ListDemo></ListDemo>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
      {/* useRoutes方式：注册路由 */}
    </div>
  )
}

export default App
