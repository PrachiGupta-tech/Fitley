import React from "react";
import AboutImg from "../../Images/AboutImg.jpeg";

const About = () => {
  return (
    <>
      <div className="md:px-32 pb-6 pt-20 flex flex-row justify-between items-center">
        <div>
          <p className="">Get to know more</p>
          <p className="text-4xl font-semibold">About Us</p>
        </div>
      </div>
      <div className="md:mx-32 flex md:flex-row flex-col justify-around items-center gap-6 md:gap-12 bg-white p-6 shadow-lg rounded-lg">
        <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ88UCYDcEwKhp1NkQ_tRb3citWHVUb22VMdzTX-AccUJdPGJj6gGiGcN3sfFXsckY3_U&usqp=CAU"
          src={AboutImg}
          alt="ChipsImage"
          className="w-85 h-40 rounded-xl"
        />
        <div>
          Fitley is evolved with a vision to bring revolution in munching
          industry to replace fried with baked, unhealthy to healthy, unfit to
          fit, with a mission of having healthy snacks for every generation. Our
          range includes a variety of baked chips like Oats, Palak, Beetroot,
          Soya, Quinoa, Jowar, and Ragi Chips, each crafted with millet bases
          and no preservatives. With just a 2% sunflower oil spray, these chips
          are baked, super crunchy, and free from maida, delivering high
          nutrition and classic flavors without compromise.
        </div>
      </div>
      <div className="md:px-32 pb-6 pt-10">
        <p className="text-2xl font-semibold mb-6">What Customers Say</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              "Excellent product quality! The service was outstanding and
              delivery was on time. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Sophia Johnson</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              "Amazing experience! The product exceeded my expectations, and the
              support team was very helpful."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Michael Brown</p>
                <p className="text-sm text-gray-500">London, UK</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              "Great customer service and fast shipping. The product quality is
              top-notch. I'll definitely shop here again!"
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">David Smith</p>
                <p className="text-sm text-gray-500">Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
