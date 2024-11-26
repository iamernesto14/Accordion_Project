import React from "react";

function Accordion({ isOpen, onClick, question, answer }) {
  return (
    <div>
      <button
        className="flex w-full justify-between outline-none text-left items-center gap-10 mb-5 cursor-pointer"
        onClick={onClick}
      >
        <span className="font-bold text-dark-purple text-[14px] hover:text-purple-500 md:text-[18px]">{question}</span>
        {isOpen ? (
          <span>
            <img src="./src/assets/images/icon-minus.svg" alt="minus" />
          </span>
        ) : (
          <span>
            <img src="./src/assets/images/icon-plus.svg" alt="plus" />
          </span>
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-grayish-purple ${
          isOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
        }`}
      >
        <div className="overflow-hidden mb-5 text-[16px]">{answer}</div> {/* Display answer here */}
      </div>
    </div>
  );
}

export default Accordion;
