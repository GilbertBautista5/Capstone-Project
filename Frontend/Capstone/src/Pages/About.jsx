import React from 'react'
import ResponsiveDrawer from '../Components/Sidebar3'

export default function About() {
  return (
    <div>
        <h1 className='header1'> About </h1>
        <ResponsiveDrawer />
        <p>PlanAhead is your indispensable daily planning application that
          streamlines your schedule and helps you stay organized in the
          fast-paced world of today. With an intuitive and user-friendly
          interface, PlanAhead empowers you to plan, manage, and optimize your
          day with ease. Whether you're a professional looking to balance
          meetings, deadlines, and personal time, or a student managing classes
          and study sessions, PlanAhead has you covered. The app offers features
          like customizable to-do lists, calendar integration, priority setting,
          and real-time reminders, ensuring that you never miss an appointment
          or task. PlanAhead is designed to boost your productivity and reduce
          stress by giving you the tools to create a well-structured daily
          routine. Say goodbye to chaos and hello to a more organized,
          efficient, and balanced life with PlanAhead.</p>
        
          <div className="imageContainer">
        {" "}
        <img src='../../Images/public/Logo.svg' />
      </div>
    </div>
  )
}
