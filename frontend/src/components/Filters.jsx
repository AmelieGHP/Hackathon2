import React, { useState } from "react";

function Filters({
  stage0,
  setStage0,
  stage1,
  setStage1,
  stage2,
  setStage2,
  stage3,
  setStage3,
  stage4,
  setStage4,
}) {
  const handleChange = () => {
    setStage0(!stage0);
    if (stage0 === false) {
      setStage1(false); setStage2(false); setStage3(false); setStage4(false)
    }
    if (stage0 === true) {
      setStage1(true); setStage2(true); setStage3(true); setStage4(true)
    }
  }
  return (
    <div className="filters">
      <div className="type filter">
        <h4>License required</h4>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="stage0"
            name="stage0"
            checked={stage0}
            onChange={() => { handleChange() }}
          />
          <label htmlFor="stage0">None</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="stage1"
            name="stage1"
            checked={stage1}
            onChange={() => setStage1(!stage1)}
          />
          <label htmlFor="stage1">BHS stage 1</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="stage2"
            name="stage2"
            checked={stage2}
            onChange={() => setStage2(!stage2)}
          />
          <label htmlFor="stage2">BHS stage 2</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="stage3"
            name="stage3"
            checked={stage3}
            onChange={() => setStage3(!stage3)}
          />
          <label htmlFor="stage3">BHS stage 3</label>
        </div>
        <div className="inputContainer">
          <input
            type="checkbox"
            id="stage4"
            name="stage4"
            checked={stage4}
            onChange={() => setStage4(!stage4)}
          />
          <label htmlFor="stage4">BHS stage 4</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
