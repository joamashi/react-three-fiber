// eslint-disable-next-line no-unused-vars
import { Routes, Route, Navigate } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { useRef, useState } from 'react'

import Layout from 'Layout/Layout'
import Main from 'Pages/Main'
import Three from 'Pages/Three'

import Zustand from 'Pages/Zustand'
import Zustand2 from 'Pages/Zustand2'

import Counter from 'Pages/Counter'

import Day from 'Pages/Day'
import CreateWord from 'Pages/CreateWord'
import CreateDay from 'Pages/CreateDay'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route element={<Layout />}>
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/zustand2" element={<Zustand2 />} />
        <Route path="/three/:id" element={<Three />} />
        <Route path="/counter" element={<Counter initialCount={0} />} />

        <Route path="/day/:id" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
      </Route>

      {/* TODO: 404 처리 필요 */}
      {/*<Route component={NotFound} />*/}
    </Routes>
  )
}
