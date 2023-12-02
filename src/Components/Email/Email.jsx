import React from "react";

import "./Email.css";

const emailSubmetHandler = (e) => {
  e.preventDefault();
};

const Email = () => {
  return (
    <form className="email" onSubmit={emailSubmetHandler}>
      <input placeholder="Enter your email" type="text" />
      <button className="custom__button1">Submit</button>
    </form>
  );
};

export default Email;
