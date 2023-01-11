import React, { useState } from "react";

function Filters() {
  // 4 unicorn
  // 3 zebra
  // 2 horse donkey
  // 1 shetland pony
  // 0 rocking-horse
  const [stage0, setStage0] = useState(true);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(true);
  const [stage3, setStage3] = useState(true);
  const [stage4, setStage4] = useState(true);

  return (
    <div className="filters">
      <div className="type filter">
        <h4>License required</h4>
        <div className="inputContainer">
          <label htmlFor="stage0">BHS stage 0</label>
          <input
            type="checkbox"
            id="stage0"
            name="stage0"
            checked={stage0}
            onChange={() => setStage0(!stage0)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="stage1">BHS stage 1</label>
          <input
            type="checkbox"
            id="stage1"
            name="stage1"
            checked={stage1}
            onChange={() => setStage1(!stage1)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="stage2">BHS stage 2</label>
          <input
            type="checkbox"
            id="stage2"
            name="stage2"
            checked={stage2}
            onChange={() => setStage2(!stage2)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="stage3">BHS stage 3</label>
          <input
            type="checkbox"
            id="stage3"
            name="stage3"
            checked={stage3}
            onChange={() => setStage3(!stage3)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="stage4">BHS stage 4</label>
          <input
            type="checkbox"
            id="stage4"
            name="stage4"
            checked={stage4}
            onChange={() => setStage4(!stage4)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
