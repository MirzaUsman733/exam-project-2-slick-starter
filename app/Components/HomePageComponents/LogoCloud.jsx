const LogoCloud = () => {
  return (
    <div>
      <section className="py-26 bg-white relative overflow-hidden">
        <div className="container p-6 py-10 mx-auto relative">
          <h2 className="text-center text-3xl font-[lato] font-extrabold mb-6">
            Trusted by popular marketing brands
          </h2>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/google.png" alt="google" className="h-16" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/apple.png" alt="apple" className="h-16" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/cisco.png" alt="cisco" className="h-16" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/amazon.png" className="h-16" alt="amazon" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/microsoft.png" className="h-16" alt="microsoft" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-8">
              <div className="flex items-center justify-center h-32 py-6 px-2 md:px-6 bg-white border rounded-2xl">
                <img src="/pmi.png" className="h-16" alt="pmi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
