import React from 'react'
import PrivacyPolicy from '../Components/privacy-policy/PrivacyPolicy'
import HotExam from '../Components/HomePageComponents/HotExams/HotExam'

const page = () => {
  return (
    <div>
      <PrivacyPolicy />
      <hr className='my-10' />
      <HotExam />
    </div>
  )
}

export default page
