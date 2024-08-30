import CustomInvoiceComponent from "./CustomInvoiceComponent";

const Page = async({ params }) => {
  const customInvoicePerma = params?.slug;
  
  const fetchCustomInvoice = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/invoice/${customInvoicePerma}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const courseDetail = await res.json();
      return courseDetail;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const CustomInvoiceData = await fetchCustomInvoice();
  return (
    <div>
      <CustomInvoiceComponent
        // formattedCartItems={formattedCartItems}
        responseData={CustomInvoiceData}
        customInvoicePerma={customInvoicePerma}
      />
    </div>
  );
};

export default Page;
