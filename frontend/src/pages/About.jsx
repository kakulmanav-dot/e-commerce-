import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import LetterBox from '../components/LetterBox';
function About() {
  return (
    <div>
      <div className="border-t ">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="w-full flex flex-col sm:flex-row  justify-center gap-10 mt-10">
        <div className=" w-full sm:w-1/3 p-7 sm:p-0">
          <img src={assets.about_img} alt="" />
        </div>
        <div className=" w-full sm:w-2/3 flex items-center justify-center flex-col gap-3 text-gray-500">
          <p>
            Forever Living Products is a global company that sells health,
            beauty, and wellness products, often through an e-commerce platform.
            It was founded in 1978 by Rex Maughan in the United States. The
            company is well known for products made from aloe vera. Through its
            online website, customers can browse and purchase a variety of items
            such as skincare products, nutritional supplements, and personal
            care goods.
          </p>
          <p>
            The website provides detailed product information and ordering
            options. Customers can create accounts to track orders and manage
            purchases. Forever’s online presence helps the company reach
            customers in many countries.
          </p>
          <div className="flex flex-col mt-3 gap-3">
            <b className="text-left text-black ">Our Mission</b>
            <p>
              The e-commerce system makes buying products simple and convenient.
              Overall, Forever’s website supports its global business and
              customer network.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start">
          <Title text1={"Why"} text2={"Choose Us"} />
        </div>
        <div className="flex mt-7 sm:flex-row flex-col gap-4 sm:gap-0">
          <div className="border p-10 w-full sm:w-1/3 shadow-xl hover:scale-110 bg-white">
            <b>Quality Assurance:</b>
            <p className="text-wrap">
              Quality assurance means making sure products or services meet high
              standards. Companies check and test their products to ensure they
              are safe, reliable, and of good quality.
            </p>
          </div>
          <div className="border p-10 w-full sm:w-1/3 shadow-xl hover:scale-110 bg-white">
            <b>Convience:</b>
            <p className="text-wrap">
              Convenience means making things easy and quick for customers. In
              e-commerce, people can shop anytime and anywhere without visiting
              a physical store.
            </p>
          </div>
          <div className="border p-10 w-full  sm:w-1/3 shadow-xl hover:scale-110 bg-white">
            <b>Exceptional Customer Services</b>
            <p className="text-wrap">
              Exceptional customer service means helping customers in a friendly
              and effective way. It includes answering questions, solving
              problems quickly, and making customers feel valued. 😊
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <LetterBox />
      </div>
    </div>
  );
}

export default About