import React, { useState } from 'react'

const Word = ({ props }) => {
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(props.isDone)
  const [word, setWord] = useState(props.id)

  const toggleDone = () => {
    fetch(`http://localhost:3002/words/${props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...props,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) setIsDone(!isDone)
    })
  }

  const onDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3002/words/${props.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) setWord(0)
      })
    }
  }

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  if (word === 0) return null // 삭제

  return (
    <>
      <tr className={isDone ? 'off' : ''}>
        <td>
          <input
            type="checkbox"
            defaultChecked={isDone}
            onChange={toggleDone}
          />
        </td>
        <td>{props.eng}</td>
        <td>{isShow && props.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
          <button onClick={onDelete}>삭제</button>
        </td>
      </tr>
    </>
  )
}

export default Word
