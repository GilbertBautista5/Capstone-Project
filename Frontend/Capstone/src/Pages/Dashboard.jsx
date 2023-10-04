import React from 'react'
// import ToDoList2 from '../Components/ToDoList2'
import ResponsiveDrawer from '../Components/Sidebar3'
import QuoteApi from '../Components/QuoteAPI'
import BasicTextFields from '../Components/Notes'
import BasicCard from '../Components/NotesCard'


export default function Dashboard() {
  return (

    
    <div className='task-form'>
      <ResponsiveDrawer/>
      <BasicTextFields/>
      <BasicCard/>
      <QuoteApi />
      
      
      {/* <ToDoList2 /> */}
    </div>
        
  )
}
