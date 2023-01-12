import React, { useState } from "react";
import Proptypes from "prop-types";
import Select from "react-select";

function Filters({ setStage0, setStage1, setStage2, setStage3, setStage4 }) {
  const options = [
    { value: "0", label: "None" },
    { value: "1", label: "BHS stage 1" },
    { value: "2", label: "BHS stage 2" },
    { value: "3", label: "BHS stage 3" },
    { value: "4", label: "BHS stage 4" },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleChange = (e) => {
    const tempArray = [];
    for (let i = 0; i < e.length; i++) {
      const { value } = e[i];
      tempArray.push(value);
      console.log(e[i].value);
    }
    console.log(tempArray);
    setSelectedOption(tempArray);
  };
  const handleClick = () => {
    if (selectedOption.length > 0) {
      if (selectedOption.includes("0")) {
        setStage0(true);
      } else {
        setStage0(false);
      }
      if (selectedOption.includes("1")) {
        setStage1(true);
      } else {
        setStage1(false);
      }
      if (selectedOption.includes("2")) {
        setStage2(true);
      } else {
        setStage2(false);
      }
      if (selectedOption.includes("3")) {
        setStage3(true);
      } else {
        setStage3(false);
      }
      if (selectedOption.includes("4")) {
        setStage4(true);
      } else {
        setStage4(false);
      }
    } else {
      setStage0(true);
      setStage1(true);
      setStage1(true);
      setStage1(true);
      setStage1(true);
    }

  };

  useState(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <div className="filters">
      <p className="accentText boldText">Filter by</p>
      <div className="typeFilter">
        <label>Type of license needed</label>
        <Select
          onChange={(e) => {
            handleChange(e);
          }}
          options={options}
          isMulti
          placeholder="Type of License"
          className="dropdown"
        />
      </div>
      <div className="calendarsBox">
        <div>
          <label htmlFor="startDate"> Pick up date </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            placeholder="Pick up date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate"> Return date </label>
          <input
            type="date"
            min={startDate}
            id="endDate"
            name="endDate"
            value={endDate}
            placeholder="Return date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="primaryButton"
        onClick={() => handleClick()}
      >
        Search
      </button>
    </div>
  );
}
Filters.propTypes = {
  stage0: Proptypes.node.isRequired,
  setStage0: Proptypes.node.isRequired,
  stage1: Proptypes.node.isRequired,
  setStage1: Proptypes.node.isRequired,
  stage2: Proptypes.node.isRequired,
  setStage2: Proptypes.node.isRequired,
  stage3: Proptypes.node.isRequired,
  setStage3: Proptypes.node.isRequired,
  stage4: Proptypes.node.isRequired,
  setStage4: Proptypes.node.isRequired,
};
export default Filters;
