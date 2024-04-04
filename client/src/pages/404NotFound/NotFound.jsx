import React from 'react'
import Header from '../../components/Header/Header'

function NotFound() {
  return (
    <>
    <Header></Header>
    <h1 className='text-center position-relative' style={{top:"calc(50vh - 116px)"}}>404 Not found!</h1>
    </>
  )
}

export default NotFound