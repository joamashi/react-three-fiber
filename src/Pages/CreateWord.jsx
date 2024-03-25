import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from 'Hooks/useFetch'

const CreateWord = () => {
  const days = useFetch('http://localhost:3002/days')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3002/words/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다')
        navigate(`/day/${dayRef.current.value}`)
      }
    })

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true)
    }
  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)

  return (
    <>
      {' '}
      <form onSubmit={onSubmit}>
        <div>
          <label>Eng</label>
          <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div>
          <label>Kor</label>
          <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>
        <div>
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button style={{ opacity: isLoading ? 0.3 : 1 }}>
          {isLoading ? 'Saving...' : '저장'}
        </button>
      </form>
    </>
  )
}

export default CreateWord
