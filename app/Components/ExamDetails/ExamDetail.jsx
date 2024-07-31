import Breadcrumbs from "./Breadcrumbs";
import ExamBanner from "./ExamBanner";
import HeaderCard from "./HeaderCard";
import LastWeekResults from "./LastWeekResults";
import LimitedOfferCountdown from "./LimitedOfferCountdown";
import TopicsCovered from "./TopicsCovered";

const ExamDetail = ({
  examData,
  formattedDate,
  vendorPerma,
  examPerma,
  breadcrumbData,
}) => {
  console.log(breadcrumbData);
  return (
    <div>
      <Breadcrumbs breadcrumbData={breadcrumbData} />
      <ExamBanner />
      <HeaderCard
        examTitle={examData?.exam_title}
        examCode={examData?.exam_code}
        lastUpdate={formattedDate}
        examQuestions={examData?.exam_questions}
        examVendorTitle={examData?.exam_vendor_title}
        examVendorPerma={examData?.exam_vendor_perma}
        examPrices={examData?.exam_prices}
        examCerts={examData?.exam_certs}
      />
      <hr className="my-4 container mx-auto" />
      <LastWeekResults
        exam_last_week_passed={examData?.exam_last_week_passed}
        exam_last_week_average_score={examData?.exam_last_week_average_score}
        exam_last_week_word_to_word={examData?.exam_last_week_word_to_word}
        examVendorTitle={examData?.exam_vendor_title}
        examCode={examData?.exam_code}
      />
      <TopicsCovered
        examTopics={examData?.exam_topics}
        examVendorTitle={examData?.exam_vendor_title}
        examCode={examData?.exam_code}
      />
      <hr className="my-4 container mx-auto" />
      <LimitedOfferCountdown />
    </div>
  );
};

export default ExamDetail;
