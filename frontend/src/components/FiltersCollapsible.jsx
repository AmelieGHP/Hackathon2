import React, { useState } from "react";
import Proptypes from "prop-types";
import Select from "react-select";
import PlusIcon from "../assets/black-mount-icon-plus.svg";
import MinusIcon from "../assets/black-mount-icon-minus.svg";

function FiltersCollapsible({
  setStage0,
  setStage1,
  setStage2,
  setStage3,
  setStage4,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setSearch,
}) {
  const options = [
    { value: "0", label: "None" },
    { value: "1", label: "BHS stage 1" },
    { value: "2", label: "BHS stage 2" },
    { value: "3", label: "BHS stage 3" },
    { value: "4", label: "BHS stage 4" },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  const handleChange = (e) => {
    const tempArray = [];
    for (let i = 0; i < e.length; i++) {
      const { value } = e[i];
      tempArray.push(value);
    }
    setSelectedOption(tempArray);
  };
  const handleClick = () => {
    setSearch(true);
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

  const clearFilters = () => {
    setStage0(true);
    setStage1(true);
    setStage2(true);
    setStage3(true);
    setStage4(true);
    setStartDate("");
    setEndDate("");
    setSearch(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsibleFiltersContainer">
      <div
        type="button"
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className="collapsibleFilters"
      >
        <p className="label">Filter by</p>
        {isOpen ? (
          <img src={MinusIcon} alt="minus" />
        ) : (
          <img src={PlusIcon} alt="plus" />
        )}
      </div>

      {isOpen && (
        <div className="filtersContent">
          <div className="filters">
            <div className="typeFilter">
              <label>License type</label>
              <Select
                onChange={(e) => {
                  handleChange(e);
                }}
                options={options}
                isMulti
                placeholder="License"
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
          </div>
          <div className="buttons">
            <button
              type="button"
              className="primaryButton"
              onClick={() => handleClick()}
            >
              Search
            </button>
            <button
              className="clearButton"
              type="button"
              onClick={() => clearFilters()}
            >
              Show all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
FiltersCollapsible.propTypes = {
  setStage0: Proptypes.node.isRequired,
  setStage1: Proptypes.node.isRequired,
  setStage2: Proptypes.node.isRequired,
  setStage3: Proptypes.node.isRequired,
  setStage4: Proptypes.node.isRequired,
  startDate: Proptypes.node.isRequired,
  setStartDate: Proptypes.node.isRequired,
  endDate: Proptypes.node.isRequired,
  setEndDate: Proptypes.node.isRequired,
  setSearch: Proptypes.node.isRequired,
};
export default FiltersCollapsible;
