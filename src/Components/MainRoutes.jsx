import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CreateNotice from './CreateNotice'
import Login from './Login'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/createnotice" element={<CreateNotice/>}/>
        </Routes>
        
    </div>
  )
}
