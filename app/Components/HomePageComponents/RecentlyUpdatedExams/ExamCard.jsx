import Link from "next/link";

const ExamCard = ({ recentlyUpdated }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {recentlyUpdated?.map((exam) => {
          return (
            <Link href={`/mock-exam/${exam?.exam_vendor_perma}/${exam?.exam_perma}`}
              key={exam?.exam_code}
              className="bg-white shadow-lg rounded-lg overflow-hidden my-5 hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="p-4 bg-blue-500 clip-path-polygon">
                <h3 className="text-white text-lg font-semibold">
                  {exam.exam_title}
                </h3>
                <p className="text-white mt-2">Code: {exam.exam_code}</p>
              </div>
              <div className="flex items-center p-4">
                <img
                  src={exam.exam_vendor_img}
                  alt={exam.exam_vendor_title}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-800 font-semibold">
                    {exam.exam_vendor_title}
                  </p>
                  <p className="text-gray-600">
                    Updated:{" "}
                    {new Date(exam.exam_update_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExamCard;
