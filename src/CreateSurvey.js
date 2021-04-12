import React, { useState } from "react";
import { useHistory } from "react-router";
import Option from "./Option";
import Question from "./Question";
import TypeSelector from "./TypeSelector";

const CreateSurvey = ({ squestions, setSquestion }) => {
  const history = useHistory();
  const generateRandomNumber = () => Math.floor(Math.random() * 1000 + 1);
  const [qtext, setQtext] = useState("");
  const [qtype, setQtype] = useState(0);
  const [options, setOptions] = useState([
    { uid: generateRandomNumber(), value: "" },
    { uid: generateRandomNumber(), value: "" },
  ]);
  const addOptions = () => {
    const newOption = {
      uid: generateRandomNumber(),
      value: "",
    };
    const updatedOption = [...options];
    updatedOption.push(newOption);
    setOptions(updatedOption);
  };
  const deleteOptions = () => {
    if (options.length > 2) {
      const updatedOption = [...options];
      updatedOption.pop();
      setOptions(updatedOption);
    }
  };
  const updateTextOption = (id, text) => {
    const updatedOption = [...options];
    const changedIndex = updatedOption.findIndex((x) => x.uid === id);
    updatedOption[changedIndex].value = text;
    setOptions(updatedOption);
  };
  const addQuestion = () => {
    const newSurveyQuestion = [...squestions];
    const newQuestion = {
      qtext,
      qtype,
      options,
    };
    newSurveyQuestion.push(newQuestion);
    setSquestion(newSurveyQuestion);
    setQtext("");
    setQtype(0);
    setOptions([
      { uid: generateRandomNumber(), value: "" },
      { uid: generateRandomNumber(), value: "" },
    ]);
  };
  const publish = () => {
    addQuestion();
    history.push("/take-survey");
  };
  return (
    <>
      <TypeSelector qtype={qtype} setQtype={setQtype} />
      {qtype !== 0 ? (
        <>
          <Question qtext={qtext} setQtext={setQtext} />
          {options.map((opt, key) => (
            <Option
              key={key}
              uid={opt.uid}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updateTextOption}
            />
          ))}
          <button className="btn btn-danger m-3" onClick={addQuestion}>
            Add Question
          </button>
          <button className="btn btn-danger m-3" onClick={publish}>
            Publish
          </button>
        </>
      ) : null}
    </>
  );
};

export default CreateSurvey;
