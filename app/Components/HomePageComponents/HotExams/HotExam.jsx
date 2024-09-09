import ChildComponent from "./ChildComponent";

const HotExam = async () => {
  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/hot_exams`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`${apiUrl}/v1/vendors`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  const vendors = await res.json();
  const hotExams = await fetchData();
  return (
    <div>
      <ChildComponent
        hotExamsWeek={hotExams.week}
        hotExamMonthly={hotExams.month}
        vendors={vendors}
      />
    </div>
  );
};

export default HotExam;
