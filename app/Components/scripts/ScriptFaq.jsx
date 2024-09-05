'use client'
import React from 'react'

const ScriptFaq = ({examData}) => {
  return (
    <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: examData?.exam_faqs?.map((faq) => ({
                "@type": "Question",
                name: faq.faq_q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.faq_a,
                },
              })),
            }),
          }}
        />
    </div>
  )
}

export default ScriptFaq
