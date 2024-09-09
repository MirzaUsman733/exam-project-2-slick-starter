'use client'
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendors`,
                    {
                        headers: {
                            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status}`);
                }
                
                const data = await res.json();
                setVendors(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchVendors();
    }, []);

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url).then(() => {
            alert("Image URL copied!");
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div>
            {vendors.map((vendor, index) => (

                <div key={index}>
                    {vendor.vendor_perma}
                </div>
            ))}
        </div>
    );
};

export default Page;
