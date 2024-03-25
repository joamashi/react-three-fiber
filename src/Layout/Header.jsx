import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const Header = (props) => {
  const { id } = useParams()

  return (
    <>
      <header>Joamashi.com {id}</header>
      <nav>
        <Link to={'/'}>Main</Link>
        <Link to={'/zustand'}>Zustand</Link>
        <Link to={'/zustand2'}>Zustand-Memo</Link>
        <Link to={'/three/1'}>Three</Link>
        <Link to={'/counter'}>Counter</Link>
        <Link to={'/day/1'} state={{ some: 'Day!!' }}>
          Day
        </Link>
      </nav>
    </>
  )
}

export default Header
