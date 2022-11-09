import React from 'react'
import SideBar from './Sidebar'

export default function Dashboard({ id }) {
  return (
    <div className='d-flex' style= {{ height: '100vh' }}>
        <SideBar id={id} />
    </div>
  )
}
