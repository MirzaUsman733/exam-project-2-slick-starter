import HotExam from "../HomePageComponents/HotExams/HotExam";
import Breadcrumbs from "./Breadcrumbs";
import ExamBanner from "./ExamBanner";
import FAQS from "./FAQS";
import HeaderCard from "./HeaderCard";
import LastWeekResults from "./LastWeekResults";
import LimitedOfferCountdown from "./LimitedOfferCountdown";
import OtherRelatedExam from "./OtherRelatedExam";
import RelatedAndPremium from "./RelatedAndPremium";
import RelatedExams from "./RelatedExams";
import TopicsCovered from "./TopicsCovered";

const ExamDetail = ({ examData, formattedDate, breadcrumbData }) => {
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
      <LimitedOfferCountdown />
      <hr className="my-4 container mx-auto" />
      <HotExam />
      <hr className="my-4 container mx-auto" />
      <TopicsCovered
        examTopics={examData?.exam_topics}
        examVendorTitle={examData?.exam_vendor_title}
        examCode={examData?.exam_code}
      />
      <hr className="my-4 container mx-auto" />
      <OtherRelatedExam vendorPerma={examData?.exam_vendor_perma} />
      <hr className="my-4 container mx-auto" />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <FAQS exam_faqs={examData?.exam_faqs} />
          </div>
          <div className="col-span-1">
            <RelatedAndPremium
              questionTypes={examData?.question_types}
              examCode={examData?.exam_code}
            />
            <RelatedExams vendorPerma={examData?.exam_vendor_perma} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetail;
