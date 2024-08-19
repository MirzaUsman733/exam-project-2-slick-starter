import CertificationExams from "./Components/HomePageComponents/CertificationExams/CertificationExams";
import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import HowItWorks from "./Components/HomePageComponents/HowItWorks";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";
import RecentlyUpdated from "./Components/HomePageComponents/RecentlyUpdatedExams/RecentlyUpdated";

export default function Home() {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
  return (
    <main>
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
      <Features />
      <hr className=" border-gray-300 mx-auto" />
      <LogoCloud />
      <hr className=" border-gray-300 mx-auto" />
      <RecentlyUpdated />
      <hr className=" border-gray-300 mx-auto" />
      <HotExam />
      <hr className=" border-gray-300 mx-auto" />
      <HowItWorks />
      <hr className="border-gray-300 my-5 mx-auto" />
      <CertificationExams />
      <hr className="border-gray-300 my-5 mx-auto" />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: `Dumps Collections`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
  };
}
