// 表格 + 分页
import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { Typography, Empty, Table, Tag, Button, Space, Popconfirm } from 'antd'
const { Title } = Typography
const { Column } = Table

const GarbageList: FC = () => {
  useTitle('小慕问卷-回收站')
  const [list] = useState([
    {
      _id: 'q2',
      title: '问卷1',
      isPublished: true,
      isStar: false,
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
  // 记录选中的ID
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const TableElm = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Popconfirm title="是否恢复?" cancelText="取消" okText="确认">
            <Button type="primary" disabled={selectedIds.length === 0}>
              恢复
            </Button>
          </Popconfirm>
          <Popconfirm
            title="是否彻底删除?"
            description="删除后不可找回"
            cancelText="取消"
            okText="确认"
          >
            <Button danger disabled={selectedIds.length === 0}>
              彻底删除
            </Button>
          </Popconfirm>
        </Space>
      </div>
      <Table
        dataSource={list}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[]) // key[] -> string[]
          },
        }}
      >
        <Column title="名称" dataIndex="title" key="title"></Column>
        <Column
          title="是否发布"
          dataIndex="isPublished"
          key="isPublished"
          render={(isPublished: boolean) => (
            <>{isPublished ? <Tag color="green">已发布</Tag> : <Tag>未发布</Tag>}</>
          )}
        ></Column>
        <Column
          title="是否标星"
          dataIndex="isStar"
          key="isStar"
          render={(isStar: boolean) => (
            <>{isStar ? <Tag color="green">已标星</Tag> : <Tag>未标星</Tag>}</>
          )}
        ></Column>
        <Column title="答卷数量" dataIndex="answerCount" key="answerCount"></Column>
        <Column title="创建时间" dataIndex="createAt" key="createAt"></Column>
      </Table>
    </>
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>
      <div className={styles.content}>
        {list.length === 0 && <Empty description="暂无数据"></Empty>}
        {list.length > 0 && TableElm}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}
export default GarbageList
