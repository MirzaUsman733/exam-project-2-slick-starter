import React from "react";
import VendorDetails from "../../Components/exam-provider-components/VendorDetails";
const Page = async ({ params }) => {
  const vendorPerma = params.slug;
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
  const fetchRelatedExamData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendor/${vendorPerma}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const relatedExamData = await res.json();
      return relatedExamData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const vendorData = await fetchRelatedExamData();
  return (
    <>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Dumps Collection",
            description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.6,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <VendorDetails vendorData={vendorData} vendorPerma={vendorPerma} />
    </>
  );
};

export default Page;


export async function generateMetadata({ params }) {
  const vendorPerma = params.slug;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendor/${vendorPerma}`, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  const metaDATA = await response.json();
  return {
    title: `Updated ${params.vendor_perma} Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,

    robots: {
      index: metaDATA?.index_tag,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-exam-providers/${params?.vendor_perma}`,
        },
      ],
    },
  };
}
