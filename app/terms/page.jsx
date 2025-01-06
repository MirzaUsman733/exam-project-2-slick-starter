import Banner from "../Components/Banner";
import Script from "../Components/scripts/Script";
import TermsOfUse from "../Components/terms/TermsOfUse";

const page = () => {
  return (
    <div>
      <Script />
      <Banner />
      <TermsOfUse />
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
          url: `https://dumps-collection.com/terms`,
        },
      ],
    },
  };
}