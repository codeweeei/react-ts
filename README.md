## React+TS 实践
### 组件声明
React组件分为class组件和函数组件

### react-router
- 安装：
`npm i react-rotuer-dom`

### 问卷管理三个页面
- 我的问卷：列表卡片 + LoadMore
- 星标问卷：列表卡片 + 分页
- 回收站：表格 + 分页

### 登录、注册页面（前端）
受控组件：有value属性，且值同步到State
非受控组件：使用defaultValue属性，值不同步到State
搜索组件：搜索关键词以params的形式拼接在url，防止刷新重新回到首页，且可做到搜索、表格、分页组件进行解耦；

表单校验
- antd-form-rules
- 第三方工具：Formik
