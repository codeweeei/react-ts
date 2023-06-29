import React, { FC } from 'react'
import { Button, Tag } from 'antd'
import styles from '../css/ListItem.module.scss'

// 定义props类型
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  edit: (id: string) => void
  deleteItem: (id: string) => void
}

const ListDemo: FC<PropsType> = (props) => {
  const { id, title, isPublished, edit, deleteItem } = props
  return (
    <div key={id} className={styles.item}>
      <div className={styles.left}>
        <strong className={styles.title}>{title}</strong>
        {isPublished ? <Tag color="green">已发布</Tag> : <Tag color="orange">未发布</Tag>}
      </div>
      <div className={styles.right}>
        <Button
          type="link"
          onClick={() => {
            edit(id)
          }}
        >
          {isPublished ? '下架问卷' : '发布问卷'}
        </Button>
        <Button
          type="link"
          danger
          onClick={() => {
            deleteItem(id)
          }}
        >
          删除问卷
        </Button>
      </div>
    </div>
  )
}

export default ListDemo
