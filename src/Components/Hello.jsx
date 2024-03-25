import React, { useState } from 'react'

const Hello = (props) => {
  const [n, setN] = useState('m')
  const [age, setAge] = useState(props.age)

  // const changeN = () => {
  //   setN(n === 'm' ? 'J' : 'm')
  //   console.log(n)
  // }

  // console.log(props)
  return (
    <div style={{ border: '5px #000 solid' }}>
      <p>Hello</p>
      <button
        onClick={() => {
          setN(n === 'm' ? 'J' : 'm')
          setAge(age + 1)
        }}>
        Event3
      </button>
      <p>{n}</p>
      <div>
        {age},{props.name}
      </div>
    </div>
  )
}

export default Hello
