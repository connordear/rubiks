import { Slider, Switch } from "antd";
import React, { useState } from "react";
import "./App.css";
import { RubiksCube } from "./components/RubiksCube";
import "antd/dist/antd.css";
function App() {
  const [size, setSize] = useState(3);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [zOffset, setZOffset] = useState(0);
  const [pause, setPause] = useState(false);

  const reset = () => {
    setSize(3);
    setXOffset(0);
    setYOffset(0);
    setZOffset(0);
    setPause(true);
  };

  return (
    <div className="App">
      <h3>Rubiks Test</h3>
      <RubiksCube
        size={size}
        xOffset={xOffset}
        yOffset={yOffset}
        zOffset={zOffset}
        pause={pause}
      />
      <div className="controls">
        <div className="control">
          <label>Size</label>
          <Slider
            min={2}
            max={36}
            step={1}
            dots
            value={size}
            onChange={(value) => setSize(value)}
          />
        </div>
      </div>

      <div className="controls">
        <div className="control">
          <label>X Offset</label>
          <Slider
            min={-10}
            max={10}
            step={1}
            value={xOffset}
            onChange={(value) => setXOffset(value)}
          />
        </div>
        <div className="control">
          <label>Y Offset</label>
          <Slider
            min={-10}
            max={10}
            step={1}
            value={yOffset}
            onChange={(value) => setYOffset(value)}
          />
        </div>
        <div className="control">
          <label>Z Offset</label>
          <Slider
            min={-10}
            max={10}
            step={1}
            value={zOffset}
            onChange={(value) => setZOffset(value)}
          />
        </div>
      </div>
      <div className="controls">
        <div className="control">
          <Switch
            checkedChildren="Pause"
            unCheckedChildren="Play"
            checked={pause}
            onChange={(checked) => setPause(checked)}
          />
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
