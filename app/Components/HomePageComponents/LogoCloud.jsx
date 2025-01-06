import Link from "next/link";

const LogoCloud = () => {
  return (
    <div>
      <section className="py-26 bg-white relative overflow-hidden">
        <div className="container p-6 md:py-10 mx-auto relative">
          <h2 className="text-center text-md md:text-3xl font-[lato] font-extrabold mb-6">
            Trusted by popular marketing brands
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 -mx-4 -mb-8">
            <div className="px-2 mb-3 md:mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/google`}>
                  <img src="/google.png" alt="google" className="h-8 md:h-16" />
                </Link>
              </div>
            </div>
            <div className="px-2 mb-3 md:mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/apple`}>
                  <img src="/apple.png" alt="apple" className="h-8 md:h-16" />
                </Link>
              </div>
            </div>
            <div className="px-2 mb-3 md:mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/cisco`}>
                  <img src="/cisco.png" alt="cisco" className="h-8 md:h-16" />
                </Link>
              </div>
            </div>
            <div className="px-2 mb-3 md:mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/amazon`}>
                  <img src="/amazon.png" className="h-8 md:h-16" alt="amazon" />
                </Link>
              </div>
            </div>
            <div className="px-2 mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/microsoft`}>
                  <img src="/microsoft.png" className="h-8 md:h-16" alt="microsoft" />
                </Link>
              </div>
            </div>
            <div className="px-2 mb-8">
              <div className="flex items-center justify-center h-16 md:h-32 py-3 md:py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <Link href={`mock-exam-provider/pmi`}>
                  <img src="/pmi.png" className="h-8 md:h-16" alt="pmi" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
