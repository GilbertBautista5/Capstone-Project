import React from 'react'
// import ToDoList2 from '../Components/ToDoList2'
import ResponsiveDrawer from '../Components/Sidebar3'
import QuoteApi from '../Components/QuoteAPI'
import NotesForm from '../Components/NotesForm'
import BasicCard from '../Components/NotesCard'
import Notes from '../Components/Notes'



export default function Dashboard() {
  return (

    
    <div className='task-form'>
      <ResponsiveDrawer/>
      <NotesForm/>
      <Notes />
      {/* <BasicCard/>
      <QuoteApi /> */}
      
      
      {/* <ToDoList2 /> */}
    </div>
        
  )
}
