'use client';
import ScAccessAccordian from '@/app/Components/personalPages/ScAccessAccordian';
import ScPriceCard from '@/app/Components/personalPages/ScPriceCard';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      try {
        const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));
        if (!loginResponse?._token) {
          router.push('/sign-in');
        }
      } catch (error) {
        console.error('Error checking login:', error.message);
      }
    };
    checkLogin();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = JSON.parse(localStorage.getItem('loginResponse'));
        if (!loginResponse?._token) {
          router.push("/login");
          return;
        }
        if (loginResponse && loginResponse._token) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/sc-access/${params.slug_1}/${params.slug_2}`,
            {
              headers: {
                'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
                Authorization: `Bearer ${loginResponse._token}`,
              },
            }
          );
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [params.slug_1, params.slug_2]);

  return (
    <div className='container mx-auto p-6'>
      <div>
        <ScPriceCard data={data} />
      </div>
      <div>
        <ScAccessAccordian data={data} />
      </div>
    </div>
  );
};

export default Page;
