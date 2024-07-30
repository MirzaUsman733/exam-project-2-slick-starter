// components/CiscoBanner.js
const ExamBanner = () => {
    return (
        <div className="bg-purple-700 text-white flex justify-between items-center p-4 rounded-lg my-5">
            <div>
                <h1 className="text-lg font-bold">The Ultimate Cisco Advantage: All 207 Exams, One Package, <span className="text-blue-400"> $299.99 </span> Only!</h1>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded">
                Buy Now
            </button>
        </div>
    );
};

export default ExamBanner;
