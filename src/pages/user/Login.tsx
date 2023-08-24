import React, { FC, useEffect } from 'react'
import styles from './Login.module.scss'
import { Typography, Space, Button, Form, Input, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../../router'
const { Title } = Typography

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
const deleteUserFromStorage = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
const getUserInfo = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}

const Login: FC = () => {
  const [form] = Form.useForm() // 第三方hook
  useEffect(() => {
    const { username, password } = getUserInfo()
    form.setFieldsValue({
      username,
      password,
    })
  }, [])
  const onFinish = (value: any) => {
    console.log(value)
    const { username, password, remeber } = value
    if (remeber) {
      rememberUser(username, password)
    } else {
      deleteUserFromStorage()
    }
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div className={styles.form}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 400 }}
          onFinish={onFinish}
          initialValues={{
            remeber: true,
          }}
          form={form}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item name="remeber" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>没有账号，前往注册</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
