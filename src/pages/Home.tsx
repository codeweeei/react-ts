import React from 'react'
import useTitle from '../hooks/useTitle'
import { useNavigate } from 'react-router-dom'

function Home() {
  useTitle('首页')
  const nav = useNavigate()
  const navTo = (url: string) => {
    nav(url)
    // nav({
    //   pathname: url,
    //   search: 'name=codeweeei',
    // })
  }
  return (
    <>
      <div>Home</div>
      <div>
        <button
          onClick={() => {
            navTo('/test/123')
          }}
        >
          测试
        </button>
        <br />
        <button
          onClick={() => {
            navTo('/manage/list')
          }}
        >
          列表
        </button>
      </div>
    </>
  )
}
export default Home
