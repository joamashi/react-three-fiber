import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from 'Hooks/useFetch'
import Word from 'Components/Word'

const DayList = ({ props }) => {
  const days = useFetch('http://localhost:3002/days')
  const words = useFetch(`http://localhost:3002/words?day=${props.id}`)

  useEffect(() => {
    console.log('Count Change')
  }, [props.id]) // 의존성 배열, 한 번만 실행 빈 배열 []

  return (
    <>
      <h1>DayList</h1>

      <ul>
        <li>
          <Link to="/create_word" className="link">
            리스트
          </Link>
        </li>
        <li>
          <Link to="/create_word" className="link">
            단어 추가
          </Link>
        </li>
        <li>
          <Link to="/create_day" className="link">
            Day 추가
          </Link>
        </li>
      </ul>

      <ul>
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>

      {words.length === 0 && <span>Loading...</span>}

      <table>
        <tbody>
          {words.map((word) => (
            <Word props={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DayList
