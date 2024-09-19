import Link from "next/link";

const ExamCard = ({ recentlyUpdated }) => {
  console.log(recentlyUpdated)
  const bgColors = ["bg-purple-500", "bg-green-500", "bg-orange-500", "bg-blue-500", "bg-green-500", "bg-orange-500"];
  return (
    <div>
      <div className="text-2xl font-bold">Recently Updated: </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {recentlyUpdated?.map((exam, index) => {
          const bgColor = bgColors[index % bgColors.length];
          return (
            <Link
              href={`/mock-exam/${exam?.exam_vendor_perma}/${exam?.exam_perma}`}
              key={exam?.exam_code}
              className="bg-white shadow-lg rounded-lg overflow-hidden my-2 hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className={`p-4 ${bgColor} clip-path-polygon`}>
                <h3 className="text-white text-lg font-semibold">
                  {exam?.exam_vendor_title} {exam?.exam_code}
                </h3>
                <p className="text-gray-200 text-sm mt-1">{exam?.exam_title}</p>
              </div>
              <div className="flex items-center p-4">
                <img
                  src={`/vendors/${exam?.exam_vendor_perma}.png`}
                  alt={exam?.exam_vendor_title}
                  className="h-12 w-28 mr-4"
                />
                <div>
                  <p className="text-gray-800 font-semibold">
                    {exam.exam_vendor_title}
                  </p>
                  <p className="text-gray-600">
                    Updated:{" "}
                    {new Date(exam?.exam_update_date).toLocaleDateString()}
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
