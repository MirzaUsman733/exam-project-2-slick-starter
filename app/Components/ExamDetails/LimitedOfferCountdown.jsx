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
      const endDate = new Date("August 31, 2024 23:59:59").getTime();
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
    countdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-3 md:grid-cols-4">
        <div className="col-span-1">
          <img src="/girlLimitedOffer.png" alt="" className="w-full" />
        </div>

        <div className="text-center py-2 lg:py-8 px-2 lg:px-4 col-span-2">
          <div className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">
            Limited Offer
          </div>
          <div className="text-sm lg:text-lg mb-3 lg:mb-6">
            Pass Your IT Certifications In First Attempt!
          </div>
          <div className="flex justify-center gap-3 mb-2 lg:mb-5">
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg px-3 py-2 lg:p-4 w-40">
              <span className="block text-xl lg:text-4xl text-blue-500 font-semibold lg:font-bold">
                {timeLeft.days}
              </span>
              <small className="block text-xs lg:text-sm text-gray-600">
                days
              </small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg  px-3 py-2 lg:p-4 w-40">
              <span className="block text-xl lg:text-4xl text-blue-500 font-semibold lg:font-bold">
                {timeLeft.hours}
              </span>
              <small className="block text-xs lg:text-sm text-gray-600">
                hours
              </small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg  px-3 py-2 lg:p-4 w-40">
              <span className="block text-xl lg:text-4xl text-blue-500 font-semibold lg:font-bold">
                {timeLeft.minutes}
              </span>
              <small className="block text-xs lg:text-sm text-gray-600">
                minutes
              </small>
            </div>
            <div className="bg-blue-100 border-2 border-blue-200 rounded-lg  px-3 py-2 lg:p-4 w-40">
              <span className="block text-xl lg:text-4xl text-blue-500 font-semibold lg:font-bold">
                {timeLeft.seconds}
              </span>
              <small className="block text-xs lg:text-sm text-gray-600">
                seconds
              </small>
            </div>
          </div>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-1 lg:py-3 px-5 lg:px-10 rounded-full text-lg font-semibold lg:font-bold hover:bg-blue-600"
          >
            Get Special Offers
          </a>
        </div>
        <div className="hidden md:col-span-1 md:block">
          <img src="/boyLimitedOffer.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferCountdown;
