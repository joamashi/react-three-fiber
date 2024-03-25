import React, { useState } from 'react'

import Hello from 'Components/Hello'

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const restart = () => {
    setCount(0)
  }

  const switchSigns = () => {
    setCount((prev) => prev * -1)
  }

  const names = 'Park'
  const user = { age: 49, herf: 'https://naver.com' }

  // FIXME:  nfn
  const showName = () => {
    console.log('showName')
  }

  const showText = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <h1>
        Counter : <span data-testid="count">{count}</span>
      </h1>

      <p>
        {names} {user.age}
      </p>
      <a href={user.herf}>naver</a>
      <br />
      <button onClick={showName}>Event1</button>
      <br />
      <button onClick={(e) => console.log(e)}>Event2</button>
      <br />

      <Hello age={10} name={'A'} />
      <Hello age={20} name={'B'} />
      <Hello age={30} name={'C'} />

      <input type="text" onChange={(e) => showText(e)} />

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>SwitchSigns</button>
      </div>
    </>
  )
}

export default Counter
