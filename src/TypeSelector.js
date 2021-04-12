import React from "react";

const TypeSelector = ({ qtype, setQtype }) => {
  const handleChange = (e) => {
    const type = parseInt(e.target.value);
    setQtype(type);
  };
  return (
    <div className="col-md-6 offset-md-3 col-12">
      <select className="custom-select" value={qtype} onChange={handleChange}>
        <option value="0">Choose Question Type</option>
        <option value="1">Multi-Select</option>
        <option value="2">Single-Select</option>
      </select>
    </div>
  );
};

export default TypeSelector;
