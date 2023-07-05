import React from 'react'
import useTitle from '../hooks/useTitle'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetQuestionDetail } from '../hooks/useQuestion'
import { Button } from 'antd'

function Test() {
  useTitle('测试')
  const { id = '' } = useParams()
  const [searchParams] = useSearchParams()
  const nav = useNavigate()
  const navBack = () => {
    nav(-1)
  }
  const { error, data, loading, run } = useGetQuestionDetail('123')
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
        <div>
          <Button disabled={loading} onClick={run}>
            发送请求
          </Button>
          {loading ? (
            <div>Loading...</div>
          ) : !error ? (
            <div>{data?.title}</div>
          ) : (
            <div>请求失败</div>
          )}
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
