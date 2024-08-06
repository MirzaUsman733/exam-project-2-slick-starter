import CourseHeader from '@/app/Components/videoCourses/CourseHeader';
import VideoCoursesDetail from '@/app/Components/videoCourses/VideoCoursesDetail';
import React from 'react'

const page = async({params}) => {
    const courseId = params.id;
    console.log(courseId)
    const fetchCourseDetail = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/training-course/${courseId}`,
            {
              headers: {
                "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
              },
            }
          );
          if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
          }
          const courseDetail = await res.json();
          return courseDetail;
        } catch (error) {
          console.error("Error fetching data:", error);
          return [];
        }
      };
      const courseDetail = await fetchCourseDetail();
  return (
    <div className='container mx-auto p-6'>
        <CourseHeader courseDetail={courseDetail}/>
        <hr className='my-20' />
        <VideoCoursesDetail section={courseDetail.sections} />
    </div>
  )
}

export default page