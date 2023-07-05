import instance, { ResDataType } from './axios'

// 获取问卷详情
export async function getQuestionDetail(id: string) {
  const data = (await instance.get(`/api/question/${id}`)) as ResDataType
  return data
}
// 获取问卷列表
export async function getQusetionList(pageSize: number, pageNum: number) {
  const data = (await instance.get('/api/question/list', {
    params: {
      pageSize,
      pageNum,
    },
  })) as ResDataType
  return data
}
