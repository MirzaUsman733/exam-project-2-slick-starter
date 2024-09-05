'use client'
import React from "react";

const Script = () => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Dumps Collection",
            description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.6,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
    </div>
  );
};

export default Script;
