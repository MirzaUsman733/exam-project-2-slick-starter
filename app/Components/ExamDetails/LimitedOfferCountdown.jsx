"use client";
import { useEffect, useState } from "react";

const LimitedOfferCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("July 31, 2024 23:59:59").getTime();
      const now = new Date().getTime();
      const timeRemaining = endDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? "0" + days : days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    };

    const intervalId = setInterval(countdown, 1000);
    countdown(); // Initialize the countdown immediately

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <img src="/girlLimitedOffer.png" alt="" />
        </div>

        <div className="text-center py-8 px-4 col-span-2">
          <div className="text-2xl font-bold mb-2">Limited Offer</div>
          <div className="text-lg mb-6">
            Pass Your IT Certifications In First Attempt!
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-4 w-40">
              <span className="block text-4xl text-blue-500 font-bold">
                {timeLeft.days}
              </span>
              <small className="block text-sm text-gray-600">days</small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-4 w-40">
              <span className="block text-4xl text-blue-500 font-bold">
                {timeLeft.hours}
              </span>
              <small className="block text-sm text-gray-600">hours</small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-4 w-40">
              <span className="block text-4xl text-blue-500 font-bold">
                {timeLeft.minutes}
              </span>
              <small className="block text-sm text-gray-600">minutes</small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-4 w-40">
              <span className="block text-4xl text-blue-500 font-bold">
                {timeLeft.seconds}
              </span>
              <small className="block text-sm text-gray-600">seconds</small>
            </div>
          </div>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-3 px-10 rounded-full text-lg font-bold hover:bg-orange-600"
          >
            Get Special Offers
          </a>
        </div>
        <div className="col-span-1">
          <img src="/boyLimitedOffer.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferCountdown;
