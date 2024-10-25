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
          range includes a variety of baked chips like<span className="font-medium"> Oats, Palak, Beetroot,
          Soya, Quinoa, Jowar, and Ragi Chips</span>, each crafted with millet bases
          having USP's: 
          <div className="ml-3 font-medium">
          <li> No Maida & No Preservatives</li>
          <li> Baked & Super Crunchy</li>
          <li> Just 2% Sunflower Oil</li>
          <li> Highly Nutritious Classic Flavours</li>
          </div>
        </div>
      </div>
      <div className="md:px-32 pb-6 pt-10">
        <p className="text-2xl font-semibold mb-6">What Customers Say</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              "Yummy snacks! I love the crunchy chips, and Mom says they’re
              healthy too. I want these every day!"
            </p>
            <div className="flex items-center">
              <p className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 mr-4 text-white font-bold text-2xl ">A</p>
              {/* <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              /> */}
              <div>
                <p className="font-semibold">Aarav Patel</p>
                <p className="text-sm text-gray-500">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              Perfect for study breaks! Tasty snacks that keep me energized
              between classes. I’m totally hooked on these!
            </p>
            <div className="flex items-center">
            <p className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 mr-4 text-white font-bold text-2xl ">R</p>
              {/* <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              /> */}
              <div>
                <p className="font-semibold">Ritika</p>
                <p className="text-sm text-gray-500">Noida, India</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-gray-700 mb-4">
              "My kids love these, and I’m thrilled they’re a healthy option.
              Finally, snacks I feel good about giving them!"
            </p>
            <div className="flex items-center">
            <p className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 mr-4 text-white font-bold text-2xl ">K</p>
              {/* <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              /> */}
              <div>
                <p className="font-semibold">Kavya Mathur</p>
                <p className="text-sm text-gray-500">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
