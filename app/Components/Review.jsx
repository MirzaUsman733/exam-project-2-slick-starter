"use client";

const reviews = [
  {
    image: "/img_avatar1.png",
    alt: "Review by Alex Mercer",
    text: "Excellent structure and depth in CCNA and A10 Networks exam prep. Highly recommended for professionals.",
    name: "Alex Mercer",
  },
  {
    image: "/img_avatar2.png",
    alt: "Review by Jordan Belfort",
    text: "The CCNA materials were spot-on for my exam prep. Invaluable resources and great support.",
    name: "Jordan Belfort",
  },
  {
    image: "/img_avatar3.png",
    alt: "Review by Casey Smith",
    text: "A10 Networks certification was a breeze with these expertly designed exams. Top-notch support!",
    name: "Casey Smith",
  },
  {
    image: "/img_avatar4.png",
    alt: "Review by Mandy Lynn",
    text: "Reliable and updated CCNA prep materials. Clearly a leader in exam resources.",
    name: "Mandy Lynn",
  },
  {
    image: "/img_avatar5.png",
    alt: "Review by Derek Zoolander",
    text: "Perfect for CCNA and more. The resources make studying productive and stress-free.",
    name: "Derek Zoolander",
  },
  {
    image: "/img_avatar6.png",
    alt: "Review by Eliza Thornberry",
    text: "This site simplifies technical certifications like A10 Networks. Absolutely game-changing.",
    name: "Eliza Thornberry",
  },
  {
    image: "/img_avatar7.png",
    alt: "Review by Philip J. Fry",
    text: "Exceptional quality resources for CCNA. Industry-relevant and highly effective.",
    name: "Philip J. Fry",
  },
  {
    image: "/img_avatar8.png",
    alt: "Review by Sarah Connor",
    text: "Invaluable A10 Networks guides and tests. A treasure trove of exam prep!",
    name: "Sarah Connor",
  },
  {
    image: "/img_avatar9.png",
    alt: "Review by Neo Anderson",
    text: "Essential for first-time CCNA success. Comprehensive materials that mimic the real exams.",
    name: "Neo Anderson",
  },
  {
    image: "/img_avatar10.png",
    alt: "Review by Alice Wonderland",
    text: "User-focused design with unbeatable CCNA prep materials. A true study partner.",
    name: "Alice Wonderland",
  },
];

const Reviews = () => (
  <div className="backgroundReviewGreen p-6 text-center my-10">
    <div className="container mx-auto">
      <h1 className="text-white text-2xl mb-8">Reviews</h1>
      <div className="grid grid-cols-5 gap-8 p-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card rounded-lg opacity-100 scale-90 p-5 transition duration-300 ease-in-out hover:opacity-100 hover:scale-100"
            onMouseOver={(e) =>
              e.currentTarget.classList.add(
                "shadow-lg",
                "border",
                "border-gray-600"
              )
            }
            onMouseOut={(e) =>
              e.currentTarget.classList.remove(
                "shadow-lg",
                "border",
                "border-gray-600"
              )
            }
          >
            <div className="img-container w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
              <img
                src={review.image}
                alt={review.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white mb-10">{review.text}</p>
            <div className="name-container absolute left-0 bottom-0 bg-gray-300 text-black font-bold w-full py-2">
              {review.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;
