const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      description: "Create an account by setting up your email and password.",
    },
    {
      number: "2",
      description:
        "Browse through our intuitive interface to discover the features.",
    },
    {
      number: "3",
      description:
        "Drag & drop your assets, organize it into collections to keep it neat.",
    },
  ];

  return (
    <div className="relative my-10">
      <section className="py-12 md:pt-24 md:pb-0 relative z-10">
        <div className="container px-4 mx-auto">
          <div className="">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase bg-blue-500 text-white rounded-full">
              HOW IT WORKS
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              We revolutionized the way we manage digital content
            </h1>
            <p className="text-lg">
              Using our platform is easy and straightforward. Here is how it
              works:
            </p>
          </div>
        </div>
      </section>
      <div className=" px-4  mt-[-2rem] z-0 bg-blue-500 py-5 clip-path-polygon-howItWorks pb-10 ">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center justify-center mb-4 bg-blue-600 w-10 h-10 rounded-full text-white font-bold">
                {step.number}
              </div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
