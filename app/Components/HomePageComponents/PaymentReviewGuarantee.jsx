import Image from 'next/image';

export default function PaymentReviewGuarantee() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment methods */}
        <div className="bg-white p-4 border-2 shadow-lg rounded-lg">
          <h2 className="text-green-700 text-xl font-bold mb-4">We Accept</h2>
          <div className="flex justify-start gap-2">
            <img src="/safe_checkout_optimized.png" alt="Visa" />
          </div>
        </div>

        {/* Customer Review */}
        <div className="bg-white p-4 border-2 shadow-lg rounded-lg">
          <h2 className="text-green-700 text-xl font-bold mb-4">Customer Review</h2>
          <p className="text-green-700 italic mb-4">"Hi this is Romona Kearns from Holland and I would like to tell you that I passed my exam with the use of your test engine software. I will recommend your site to all my friends for sure."</p>
          <div className="flex items-center gap-2">
            <Image src="/customer.jpg" alt="Romona Kearns" width={64} height={64} className="rounded-full" />
            <div>
              <p className="text-green-600 font-semibold">Romona Kearns</p>
              <p className="text-green-500">Happy Customer</p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-white p-4 border-2 shadow-lg rounded-lg">
          <h2 className="text-green-700 text-xl font-bold mb-4">Money Back Guarantee</h2>
          <p className="text-green-700">Our all material is important and it will be handy for you. If you have short time for exam so, we are sure with the use of it you will pass it easily with good marks. If you will not pass so, you could feel free to claim your refund. We will give 100% money back guarantee if our customers are not satisfied with our products.</p>
        </div>
      </div>
    </div>
  );
}
