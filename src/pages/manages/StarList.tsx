// 卡片 + 分页
import React, { FC, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import ListItem from '../../components/ListItem'
import ListSearch from '../../components/ListSearch'
import { Card, Typography } from 'antd'
import styles from './common.module.scss'
const { Title } = Typography
const StarList: FC = () => {
  const [list] = useState([
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: true,
      isStar: true,
      answerCount: 20,
      createAt: '3月12日 13:23',
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: false,
      isStar: true,
      answerCount: 20,
      createAt: '3月12日 13:23',
    },
  ])
  useTitle('小慕问卷-星标问卷')
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {list.length &&
          list.map((item) => {
            const { _id, title, isPublished, isStar, answerCount, createAt } = item
            return (
              <Card key={_id} style={{ marginBottom: '10px' }} bordered={false}>
                <ListItem
                  _id={_id}
                  title={title}
                  isStar={isStar}
                  isPublished={isPublished}
                  answerCount={answerCount}
                  createAt={createAt}
                ></ListItem>
              </Card>
            )
          })}
      </div>
    </>
  )
}

export default StarList
