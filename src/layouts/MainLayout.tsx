import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
import UserInfo from '../components/Userinfo'

const { Header, Content, Footer } = Layout
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <UserInfo></UserInfo>
        </div>
      </Header>
      <Content className={styles.main}>
        {/* 插槽 */}
        <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>小慕问卷 &copy; 2023-present Created by codeweeei</Footer>
    </Layout>
  )
}
export default MainLayout
