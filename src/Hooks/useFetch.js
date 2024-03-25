import React, { useState, useEffect } from 'react'
// import dummy from 'db/data.json'

const useFetch = (url) => {
  // 커스텀 훅
  const [data, setData] = useState([])

  // https://github.com/coding-angma/voca
  // https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-

  {
    /* 
    * npm install -g json-server
    * json-server --watch ./src/db/data.json --port 3002
    * npx json-server --watch ./src/db/data.json --port 3002
    * 
    * 
      * REST API *
      - Create : POST
      - Read : GET
      - Update : PUT
      - Delete : DELETE

      http://localhost:3002/words?id=2
      http://localhost:3002/words?eng=book
    */
  }

  // const wordList = dummy.words.filter((word) => word.day === 1)
  // console.log(wordList)

  useEffect(() => {
    // fetch(`http://localhost:3002/words?day=${props.id}`)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [url]) // 의존성 배열, 한 번만 실행 빈 배열 []

  return data
}

export default useFetch
