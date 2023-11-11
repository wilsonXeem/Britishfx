import React from "react";

const Banner = ({ text, btn, a}) => {
  return (
    <div className="ban">
      <div className="banner">
        <div>
          <h4>{text}</h4>
        </div>
        <div>
          <button>
            <a href={a} style={{color:"white"}}>{btn}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
