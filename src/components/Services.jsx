import React from "react";
import { GiCargoShip } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";
import { FaShippingFast } from 'react-icons/fa';
import { MdWarehouse } from 'react-icons/md';
import { FaBoxOpen } from 'react-icons/fa';
import { HiMapPin } from "react-icons/hi2";
import { TbContainer } from 'react-icons/tb';
const Services = () => {
  return (
    <>
      <section id="services" className="bg-gray-2 pb-10  dark:bg-dark lg:pb-20 lg:pt-[20px] flex w-full ">
        <div className=" w-full flex flex-col items-center justify-center"> <h1 className=" font-bold text-[#e8b641] flex items-center justify-center text-5xl mb-10 ">Services</h1>
          <div className="grid gap-2   sm:grid-cols-2 lg:grid-cols-4 bg-[#e8b641] rounded-xl shadow-lg  justify-center items-center ">
            <div className="relative flex items-start justify-center ">
              <GiCargoShip className="absolute text-white text-5xl hover:text-black mt-2" />
              <SingleCard
                CardTitle="International Sea Freight"
                titleHref="/#"
                btnHref="/#"
                CardDescription="Reliable and cost-effective shipping solutions for global trade. We handle full container loads (FCL) and less than container loads (LCL) with efficiency, ensuring your cargo reaches its destination safely and on time.    "
                Button="Read More"
              />
            </div>


            <div className="relative flex items-start justify-center">
              <FaPlane className="absolute text-white text-5xl hover:text-black mt-2" />
              <SingleCard
                titleHref="/#"
                btnHref="/#"
                CardTitle="International Air Freight"
                CardDescription="Fast and secure air cargo services tailored for urgent and high-value shipments. We provide global coverage with streamlined customs clearance and real-time tracking to ensure on-time delivery and Flexible solutions for all industries. "
                Button="Read More"
              />
            </div>
            <div className="relative flex items-start justify-center">
              <MdWarehouse className=" absolute    text-white text-5xl hover:text-black mt-2" />
              <SingleCard
                image=""
                CardTitle="Customs Clearance"
                CardDescription="Hassle-free customs processing to keep your shipments moving. Our experts ensure full compliance with international regulations, minimizing delays and avoiding unnecessary costs.Let"
                Button="Read More"
              />
            </div>
            <div className="relative flex items-start justify-center">
              < FaBoxOpen className="absolute text-white text-5xl mt-2 hover:text-black" />
              <SingleCard
                image=""
                CardTitle="Third-Party Logistics Service"
                titleHref="/#"
                btnHref="/#"
                CardDescription="End-to-end logistics solutions tailored to your business. From warehousing to distribution, we manage your supply chain efficiently so you can focus on growth and customer satisfaction."
                Button="Read More"
              />
            </div>
            <div className="relative flex items-start justify-center">
              <HiMapPin className="absolute text-white text-5xl mt-2 hover:text-black" />

              <SingleCard
                image=""
                CardTitle="Transportation Service"
                titleHref="/#"
                btnHref="/#"
                CardDescription="Reliable and timely ground transportation for all types of cargo. We offer flexible fleet options and route optimization to ensure safe and efficient delivery every time."
                Button="Read More"
              />
            </div>
            <div className="relative flex items-start justify-center ">
              <FaShippingFast className=" absolute   text-5xl text-white hover:text-black  mt-2  " />
              <SingleCard
                image=""
                CardTitle="Warehouse Service"
                titleHref="/#"
                btnHref="/#"
                CardDescription="Secure and scalable storage solutions for your goods. Our modern facilities offer inventory management, real-time tracking, and seamless integration with your supply chain."
                Button="Read More"
              />
            </div>
            <div className="relative flex items-start justify-center">
              <TbContainer className="absolute text-white mt-2 text-5xl hover:text-black" />
              <SingleCard
                image=""
                CardTitle="Project Cargo Handling"
                titleHref="/#"
                btnHref="/#"
                CardDescription="Specialized logistics for oversized, heavy, or complex shipments. From planning to delivery, we manage every detail with precision, ensuring safe and timely transport of your project cargo."
                Button="Read More"
              />
            </div>
            <SingleCard
              image=""
              CardTitle="Dangerous Cargo Handling"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Safe and compliant transport of hazardous materials. Our team follows strict international regulations and safety protocols to ensure secure handling, storage, and delivery of dangerous goods."
              Button="Read More"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="h-92 mb-10 overflow-hidden rounded-lg bg-[#35708a] text-white shadow-2xl duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 ">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="my-6 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
