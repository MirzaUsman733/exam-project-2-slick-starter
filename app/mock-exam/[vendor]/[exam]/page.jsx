import ExamDetail from "@/app/Components/ExamDetails/ExamDetail";

const Page = ({ params }) => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
  const vendor_perma = params.vendor;
  const exam_perma = params.exam;

  const fetchData = async () => {
    const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/exam/${exam_perma}?coupon=MEGASALE-30`,
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
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const renderData = async () => {
    const examData = await fetchData();
    const breadcrumbData = [
      { label: "Home", path: "/" },
      { label: `${examData?.exam_vendor_title}`, path: `/${vendor_perma}` },
      {
        label: `${examData?.exam_code} - ${examData?.exam_title}`,
        path: `/${examData?.exam_vendor_title}/${examData?.exam_code}`,
      },
    ];
    const vendorPerma = vendor_perma;
    const formattedDate = new Date(
      examData.exam_update_date
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <div>
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
        <ExamDetail
          examData={examData}
          formattedDate={formattedDate}
          vendorPerma={vendorPerma}
          examPerma={exam_perma}
          breadcrumbData={breadcrumbData}
        />
      </div>
    );
  };
  return renderData();
};

export default Page;
