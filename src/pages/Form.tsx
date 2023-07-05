import React, { FC, useState, ChangeEvent } from 'react'

const Form: FC = () => {
  const [text, setText] = useState<string>('默认值')
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }
  return (
    <>
      <h2>Form 组件</h2>
      <p>{text}</p>
      <input type="text" value={text} onChange={onChange} />
      <button>打印</button>
    </>
  )
}

export default Form
