import Breadcrumbs from '@/app/Components/ExamDetails/Breadcrumbs';
import ExamBanner from '@/app/Components/ExamDetails/ExamBanner';
import HeaderCard from '@/app/Components/ExamDetails/HeaderCard';
import React from 'react'

const Page = ({ params }) => {
  const vendor_perma = params.vendor;
  const exam_perma = params.exam;
  const breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Cisco', path: '/cisco' },
    // { label: 'CCNA', path: '/cisco/ccna' },
    { label: '200-301 - Cisco Certified Network Associate', path: '/cisco/ccna/200-301' }
  ];
  return (
    <div className='container mx-auto mt-20'>
        <Breadcrumbs crumbs={breadcrumbData} />
        <ExamBanner />
        <HeaderCard />
    </div>
  )
}

export default Page;