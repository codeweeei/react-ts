import { getQuestionDetail, getQusetionList } from '../services/question'
import { useRequest } from 'ahooks'

// 获取问卷详情
const useGetQuestionDetail = (id: string) => {
  async function load() {
    const data = await getQuestionDetail(id)
    return data
  }
  const { error, data, loading, run } = useRequest(load, {
    manual: true, // 手动触发（默认为false，在初次渲染时触发）
  })
  return { error, data, loading, run }
}

// 获取问卷列表
const useGetQuestionList = (pageSize: number, pageNum: number) => {
  async function load() {
    const data = await getQusetionList(pageSize, pageNum)
    return data
  }
  const { error, data, loading } = useRequest(load)
  return { error, data, loading }
}
export { useGetQuestionDetail, useGetQuestionList }
