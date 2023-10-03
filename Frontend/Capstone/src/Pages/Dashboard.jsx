import React from 'react'
// import ToDoList2 from '../Components/ToDoList2'
import ResponsiveDrawer from '../Components/Sidebar3'
import QuoteApi from '../Components/QuoteAPI'


export default function Dashboard() {
  return (

    
    <div className='task-form'>
      <ResponsiveDrawer/>
      <QuoteApi />
      
      
      {/* <ToDoList2 /> */}
    </div>
        
  )
}
