import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container p-5 md:p-10 text-gray-800 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Refund Policy</h1>
      <p className="text-lg leading-relaxed mb-6">
        All our questions are latest & valid with correct answers. We give a 100% money-back refund policy on all real dumps. You don’t need anything else after preparing from our dumps. You can just practice these questions and pass your exam easily.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        When people buy dumps for any exam, they demand two things: a discount and a 100% refund policy. We know your money is very precious and valuable for you, and that's why we are confident you will pass your exam on the first attempt. In case of failure, you can claim your 100% money-back refund policy. However, in some cases, the money-back refund policy will not be valid:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-4">
        <li>After 30 days from the date of purchase, you cannot claim the money-back refund policy.</li>
        <li>You have to study dumps at least 15 days before taking the exam.</li>
        <li>Refund Policy is not valid on retired exams.</li>
        <li>Different names: If the name of the candidate is different than the name of the account holder.</li>
        <li>Different emails: If the email of the candidate is different than the email used for payment (e.g., Stripe, PayPal).</li>
        <li>
          You must send your examCollections Invoice number and failed result PDF or Screenshot to{' '}
          <a href="mailto:sales@examCollections.com" className="text-blue-500 underline">sales@examCollections.com</a>{' '}
          within 7 days of receiving the result.
        </li>
        <li>Wrong purchase: examCollections.com will not entertain any claims once the incorrect product is downloaded and installed.</li>
        <li>Expired orders: Out of 90 days from the purchase date.</li>
        <li>Refund policy is not valid for Unlimited Access packages.</li>
        <li>Refund policy is not valid for Training Courses.</li>
        <li>Refund policy is not valid for Additional Purchase of Test Engine Activation Keys.</li>
      </ol>

      <p className="text-lg leading-relaxed mb-6">
        Please ensure that you meet all the criteria before making a refund request. If you have any questions or need assistance, feel free to contact us at{' '}
        <a href="mailto:sales@examCollections.com" className="text-blue-500 underline">sales@examCollections.com</a>.
      </p>
    </div>
  );
};

export default RefundPolicy;
