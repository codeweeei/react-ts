import React from 'react'
import useTitle from '../hooks/useTitle'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function Test() {
  useTitle('测试')
  const { id = '' } = useParams()
  const [searchParams] = useSearchParams()
  const nav = useNavigate()
  const navBack = () => {
    nav(-1)
  }
  return (
    <>
      <div>测试页面</div>
      <div>
        <div>
          <span>params：</span>
          <span>{id}</span>
        </div>
        <div>
          <span>search：</span>
          <span>{searchParams.get('name')}</span>
        </div>
        <button
          onClick={() => {
            navBack()
          }}
        >
          返回
        </button>
      </div>
    </>
  )
}
export default Test
