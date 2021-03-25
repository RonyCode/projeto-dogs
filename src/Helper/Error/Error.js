import React from "react";

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div>
      <p style={{ color: "red", margin: "1rem 0" }}>{error}</p>
    </div>
  );
};

export default Error;
