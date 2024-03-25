import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import DayList from 'Components/DayList'

// TODO: rsc
const Main = ({ props }) => {
  const location = useLocation()
  const params = useParams()

  // <Link to={'/day/1'} state={{ some: 'Day!!' }}>Day</Link>
  // <Route path="/day/:id" element={<Day />} />
  // <Route path="/create_word" element={<CreateWord />} />
  // <Route path="/create_day" element={<CreateDay />} />

  // params : {id: '1'}
  // location : {pathname: '/day/1', search: '', hash: '', state: {some: 'Day!!'}, key: 'qpzuwex1'}

  useEffect(() => {}, [])

  return (
    <>
      <h1 style={{ color: 'blue', fontWeight: 'bold' }}>Day</h1>

      <DayList props={params} />
    </>
  )
}

export default Main
