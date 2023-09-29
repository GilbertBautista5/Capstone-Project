import React from 'react'
import ToDoList2 from '../Components/ToDoList2'
import ResponsiveDrawer from '../Components/Sidebar3'
// import BasicDateCalendar from '../Components/Calendar'
// import CommonlyUsedComponents from '../Components/CalendarForm'

export default function Dashboard() {
  return (

    
    <div className='task-form'>
      <ResponsiveDrawer/>
      {/* <BasicDateCalendar />
      <CommonlyUsedComponents /> */}
      <ToDoList2 />
    </div>
        
  )
}
