import React, { FC, useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
import { Input } from 'antd'
const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setSearchVal(curVal)
  }, [searchParams])

  // 点击搜索 -> 更改URL
  const handleSearch = (value: string) => {
    console.log(value)
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
  }
  return (
    <>
      <Search
        allowClear
        placeholder="请输入关键字"
        onSearch={handleSearch}
        value={searchVal}
        onChange={handleChange}
      />
    </>
  )
}

export default ListSearch
