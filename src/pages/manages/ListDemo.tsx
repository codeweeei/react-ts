import React, { FC, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { useGetQuestionList } from '../../hooks/useQuestion'

const ListDemo: FC = () => {
  useTitle('列表')
  const [list, setList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])
  const { error, data, loading } = useGetQuestionList(10, 1)
  console.log(data)
  // 增
  const addNew = () => {
    const r = Math.random().toString().slice(-3)
    setList([...list, { id: 'q' + r, title: '问卷' + r, isPublished: false }])
  }
  // 删
  const deleteItem = (id: string) => {
    setList(
      list.filter((item) => {
        return item.id !== id
      })
    )
  }
  // 改（发布/下架）
  const editItem = (id: string) => {
    setList(
      list.map((item) => {
        if (item.id !== id) {
          return item
        } else {
          return {
            ...item,
            isPublished: !item.isPublished,
          }
        }
      })
    )
  }
  // 查
  const searchItem = (value: string) => {
    setList(
      list.filter((item) => {
        return item.title.indexOf(value) !== -1
      })
    )
  }

  return (
    <div>
      <h2>问卷列表</h2>
      <Search searchItem={searchItem}></Search>
      {list.map((item) => {
        const { id, title, isPublished } = item
        return (
          <ListItem
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            edit={editItem}
            deleteItem={deleteItem}
          ></ListItem>
        )
      })}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => {
            addNew()
          }}
        >
          新增问卷
        </button>
      </div>
    </div>
  )
}

export default ListDemo
