import React from 'react'
// import ToDoList2 from '../Components/ToDoList2'
import ResponsiveDrawer from '../Components/Sidebar3'
import QuoteApi from '../Components/QuoteAPI'
import Notes from '../Components/Notes'
import BasicDateCalendar from '../Components/Calendar'
import { Box } from '@mui/material'



export default function Dashboard() {
  return (

    
    <div className='task-form'>
      <ResponsiveDrawer/>
      <h1> Welcome to your Dashboard </h1>
      <Box component='div' sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>
      <QuoteApi /> <BasicDateCalendar/>
      </Box>
      <Notes />

      
      
      {/* <ToDoList2 /> */}
    </div>
        
  )
}
