import React from 'react'
import AboutUs from '../Components/about-us/AboutUs'
import HotExam from '../Components/HomePageComponents/HotExams/HotExam'

const page = () => {
  return (
    <div>
      <AboutUs />
      <hr className='my-10' />
      <HotExam />
    </div>
  )
}

export default page
