import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../router'
const UserInfo: FC = () => {
  return (
    <div>
      <Link to={REGISTER_PATHNAME}>登录</Link>
    </div>
  )
}

export default UserInfo
