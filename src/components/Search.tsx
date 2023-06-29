import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Input } from 'antd'
type PropsType = {
  searchItem: (value: string) => void
}

const Search: FC<PropsType> = ({ searchItem }) => {
  const [value, setValue] = useState('')
  const handleSearch = () => {
    if (!value) {
      console.log('请输入搜索关键字')
      return
    }
    searchItem(value)
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <Input
        style={{ width: '200px', marginRight: '20px' }}
        type="text"
        value={value}
        placeholder="请输入要搜索内容"
        onChange={onChange}
      />
      <Button
        type="primary"
        size="small"
        onClick={() => {
          handleSearch()
        }}
      >
        搜索
      </Button>
    </div>
  )
}

export default Search
