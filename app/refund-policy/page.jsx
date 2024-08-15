import React from 'react'
import RefundPolicy from '../Components/refund-policy/RefundPolicy'
import HotExam from '../Components/HomePageComponents/HotExams/HotExam'

const page = () => {
  return (
    <div>
      <RefundPolicy />
      <hr className='my-10' />
      <HotExam />
    </div>
  )
}

export default page
