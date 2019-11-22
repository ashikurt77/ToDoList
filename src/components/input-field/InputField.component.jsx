import React from "react";

const InputField = ({ handleChange, handleClick }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="What to do"
        aria-describedby="button-addon2"
        onChange={handleChange}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            return handleClick();
          }
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default InputField;
