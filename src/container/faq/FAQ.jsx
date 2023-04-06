import React from "react";
import "./FAQ.css";
import { data, images } from "../../constants";

const FAQ = () => {
  return (
    <div className="app__faq">
      <div className="app__faq-container">
        <h1>Frequently asked questions</h1>
        {data.faq.map((item, index) => (
          <div className="app__faq-block">
            <div className="app__faq-block_content">
              <h3>{item.topic}</h3>
              {item.question.map((question, qIndex) => (
                <p key={qIndex}>{question}</p>
              ))}
            </div>
            <div className="app__faq-block_button">
              <p>
                {item.button}{" "}
                <img src={images.ArrowRightCircle} alt="ArrowRightCircle" />
              </p>
            </div>
          </div>
        ))}
        <h4>Still have a question?</h4>
        <h5>
          If you still have questions contact a member of the team on{" "}
          <span>live chat</span> and we’d be more than happy to help.
        </h5>
      </div>
    </div>
  );
};

export default FAQ;
