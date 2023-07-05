import React, { FC } from 'react'
import useTitle from '../hooks/useTitle'

const NotFound: FC = () => {
  useTitle('404')
  return (
    <>
      <div>404页面</div>
    </>
  )
}
export default NotFound
