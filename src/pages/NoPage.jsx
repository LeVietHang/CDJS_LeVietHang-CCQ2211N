import React from 'react'
import { Outlet } from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
       Not Fould 404
      <Outlet/>
    </div>
  )
}

export default NoPage
