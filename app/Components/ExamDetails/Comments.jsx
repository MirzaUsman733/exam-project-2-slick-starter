import CommentCard from "./CommentsCard";

const Comments = async ({ examPerma }) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/v1/exam_comments/${examPerma}?page=${1}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  if (data?.comments?.length > 1) {
    return (
      <div className="container mx-auto p-6">
        <div>
          <h2 className="text-4xl text-gray-700 text-center font-bold mb-10">
            Customer Comments
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {/* Render comment cards */}
            {data?.comments?.map((comment) => (
              <CommentCard
                key={comment.id}
                name={comment.name}
                location={comment.country}
                date={comment.date}
                content={comment.comment}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Comments;
