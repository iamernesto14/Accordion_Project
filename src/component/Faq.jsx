import React, { useState } from "react";
import Accordion from "./Accordion";
import faqData from "./faqData"; // Import the data

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-2 px-5 rounded-md bg-white min-w-[300px] md:max-w-[700px]">
      <div className="flex gap-5 items-center my-5">
        <img
          className="fill-grayish-purple w-[24px] h-[24px]"
          src="./src/assets/images/icon-star.svg"
          alt="a purple star"
        />
        <h1 className="font-bold text-3xl text-sans md:text-5xl">FAQs</h1>
      </div>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          question={item.question} 
          answer={item.answer}     
        />
      ))}
    </div>
  );
}

export default Faq;
