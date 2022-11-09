import React from 'react'
import SideBar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className='d-flex' style= {{ height: '100vh' }}>
        <SideBar id={id} />
        {selectedConversation && <OpenConversation />}
    </div>
  )
}
