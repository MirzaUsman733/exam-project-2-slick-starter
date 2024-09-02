import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import UnlimitedAccess from "../Components/unlimitedAccessComponents/UnlimitedAccess";

const page = () => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
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
      <Banner />
      <UnlimitedAccess />
      <hr className="container mx-auto" />
      <HotExam />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/unlimited-access`,
        },
      ],
    },
  };
}
