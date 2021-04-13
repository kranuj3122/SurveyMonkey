import React from "react";

const Option = ({ opt, addOptions, deleteOptions, updateText }) => {
  return (
    <div className="col-md-8 offset-md-2 col-12 input-group my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Option Text"
        value={opt.value}
        onChange={(e) => {
          updateText(opt.uid, e.target.value);
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addOptions}
        >
          +
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={(e) => {
            deleteOptions(opt.uid);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Option;
