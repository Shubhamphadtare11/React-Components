import { useState } from "react";
import "./style.css";

const Boxes = () => {
  const colors = ["Red", "Blue", "Green", "Pink", "Yellow", "Purple", "Grey"];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColor = (color)=>{
    setSelectedColor(color);
  }

  return (
    <div className="main">
      <div>
        {colors.map((color) => {
          return (
            <div
              onClick={() => handleColor(color)}
              key={color}
              style={{ backgroundColor: color }}
              className="circle"
            ></div>
          );
        })}
      </div>

      <div style={{backgroundColor:selectedColor}} className="square"></div>
    </div>
  );
};

export default Boxes;
