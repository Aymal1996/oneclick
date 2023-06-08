import React from 'react'
import Sidebar from '../component/Sidebar'
import Index from '../component/Rightside/Index'
import MsgIcon from '../assets/msg.svg'
const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <Sidebar />
      <Index />
      <div className='msg'>
        <a href="#!">
          <img src={MsgIcon} alt="msg" />
        </a>
      </div>
    </div>
  )
}

export default Home
