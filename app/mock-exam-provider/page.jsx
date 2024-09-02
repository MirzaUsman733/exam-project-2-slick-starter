import Banner from "../Components/Banner";
import ExamProvider from "../Components/exam-provider-components/ExamProvider";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
const Page = async () => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
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
  const vendors = await res.json();
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
      <Banner />
      <ExamProvider vendors={vendors} />
      <div className="mt-10">
        <HotExam />
      </div>
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Updated Mock Certified Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-exam-provider`,
        },
      ],
    },
  };
}
