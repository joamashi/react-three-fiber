import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from 'Hooks/useFetch'

const CreateDay = () => {
  const days = useFetch('http://localhost:3002/days')
  const navigate = useNavigate()

  const addDay = () => {
    fetch(`http://localhost:3002/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다')
        navigate(`/day/${days.length + 1}`)
      }
    })
  }

  return (
    <>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </>
  )
}

export default CreateDay
