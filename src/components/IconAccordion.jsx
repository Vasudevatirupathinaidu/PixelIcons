import { useState } from "react";
import AccordionOption from "./AccordionOption.jsx";
import InputContainer from "./InputContainer.jsx";

// Functional component to render an icon accordion
export default function IconAccordion({
  iconState: { color, size, x, y },
  setIconState,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle toggle of accordion open/close status
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle update of icon color
  const handleColorChange = (e) => {
    setIconState((prevState) => ({
      ...prevState,
      color: e.target.value,
    }));
  };

  // Handle update of icon size
  const handleSizeChange = (e) => {
    setIconState((prevState) => ({
      ...prevState,
      size: e.target.value,
    }));
  };

  // Handle update of icon X offset
  const handleXOffsetChange = (e) => {
    setIconState((prevState) => ({
      ...prevState,
      x: e.target.value,
    }));
  };

  // Handle update of icon Y offset
  const handleYOffsetChange = (e) => {
    setIconState((prevState) => ({
      ...prevState,
      y: e.target.value,
    }));
  };

  return (
    <AccordionOption
      title="Icon"
      className="icon-accordion-details"
      isOpen={isOpen}
      onClick={handleClick}
    >
      {isOpen && (
        <>
          {/* Icon color input */}
          <InputContainer>
            <div>
              <label htmlFor="icon-color">Color</label>
            </div>
            <div className="input-options icon-color-options">
              <input
                type="color"
                name="icon-color"
                id="icon-color"
                value={color.toUpperCase()}
                onChange={handleColorChange}
              />
              <div id="color-code">{color.toUpperCase()}</div>
            </div>
          </InputContainer>

          {/* Icon size input */}
          <InputContainer>
            <div>
              <label htmlFor="icon-size">Size</label>
            </div>
            <div className="input-options icon-size-options">
              <input
                type="number"
                name="icon-size"
                id="icon-size"
                value={size}
                onChange={handleSizeChange}
              />
            </div>
            <div className="input-units-icon">px</div>
          </InputContainer>

          {/* Icon X offset input */}
          <InputContainer>
            <div>
              <label htmlFor="icon-x-offset-type">X Offset</label>
            </div>
            <div className="input-options icon-x-offset-type-options">
              <input
                type="number"
                name="icon-x-offset-type"
                id="icon-x-offset-type"
                value={x}
                onChange={handleXOffsetChange}
              />
            </div>
            <div className="input-units-icon">px</div>
          </InputContainer>

          {/* Icon Y offset input */}
          <InputContainer>
            <div>
              <label htmlFor="icon-y-offset-type">Y Offset</label>
            </div>
            <div className="input-options icon-y-offset-type-options">
              <input
                type="number"
                name="icon-y-offset-type"
                id="icon-y-offset-type"
                value={y}
                onChange={handleYOffsetChange}
              />
            </div>
            <div className="input-units-icon">px</div>
          </InputContainer>
        </>
      )}
    </AccordionOption>
  );
}
