import React from "react";

const TakeSurvey = ({ queston }) => {
  return (
    <>
      <div className="mt-5 text-left">
        {queston.length > 0 ? (
          queston.map((q, key) => (
            <div key={key}>
              <h3 className="my-3"> {q.qtext} </h3>
              {q.options.map((opt) =>
                q.qtype === 1 ? (
                  <div className="form-check" key={opt.uid}>
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                      />
                      {opt.value}
                    </label>
                  </div>
                ) : (
                  <div className="form-check" key={opt.uid}>
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name={"random" + key}
                        value=""
                      />
                      {opt.value}
                    </label>
                  </div>
                )
              )}
            </div>
          ))
        ) : (
          <div className="text-center">
            <h2>No Question Added</h2>
          </div>
        )}
        {queston.length !== 0 ? (
          <div className="text-right">
            <button className="btn btn-danger">Confirm</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TakeSurvey;
