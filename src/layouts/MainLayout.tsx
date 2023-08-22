import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'

const { Header, Content, Footer } = Layout
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>小慕问卷</div>
        <div className={styles.right}>登录</div>
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
