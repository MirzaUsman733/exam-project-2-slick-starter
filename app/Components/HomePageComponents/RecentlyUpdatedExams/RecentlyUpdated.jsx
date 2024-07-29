import ExamCard from "./ExamCard";

const RecentlyUpdated = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/recently-updated`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  const recentlyUpdated = await res.json();
  return (
    <div className="container mx-auto p-6">
      <ExamCard recentlyUpdated={recentlyUpdated} />
    </div>
  );
};

export default RecentlyUpdated;
