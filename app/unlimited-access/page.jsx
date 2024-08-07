import React from 'react'
import UnlimitedAccess from '../Components/unlimitedAccessComponents/UnlimitedAccess'
import HotExam from '../Components/HomePageComponents/HotExams/HotExam'

const page = () => {
  return (
    <div>
        <UnlimitedAccess />
        <hr className='container mx-auto' />
        <HotExam />
    </div>
  )
}

export default page