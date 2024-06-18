import { useState } from "react";
import AccordionOption from "./AccordionOption.jsx";
import InputContainer from "./InputContainer.jsx";

// Functional component to render an outline accordion
export default function OutlineAccordion({
  outline: { radius, strokeSize, strokeColor, strokeOpacity },
  setOutline,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the accordion open/close state
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle changes to outline properties
  const handleChange = (property) => (e) => {
    setOutline((prevState) => ({
      ...prevState,
      [property]: e.target.value,
    }));
  };

  return (
    <AccordionOption
      title="Outline"
      className="outline-accordion-details"
      isOpen={isOpen}
      onClick={handleClick}
    >
      {isOpen && (
        <>
          <InputContainer>
            <div>
              <label htmlFor="outline-radius">Radius</label>
            </div>
            <div className="input-options outline-radius-options">
              <input
                type="number"
                name="outline-radius"
                id="outline-radius"
                value={radius}
                onChange={handleChange("radius")}
              />
            </div>
            <div className="input-units-icon">px</div>
          </InputContainer>

          <InputContainer>
            <div>
              <label htmlFor="outline-stroke-size-type">Stroke size</label>
            </div>
            <div className="input-options outline-stroke-size-type-options">
              <input
                type="number"
                name="outline-stroke-size-type"
                id="outline-stroke-size-type"
                value={strokeSize}
                onChange={handleChange("strokeSize")}
              />
            </div>
            <div className="input-units-icon">px</div>
          </InputContainer>

          <InputContainer>
            <div>
              <label
                htmlFor="outline-stroke-color"
                style={
                  !strokeSize ? { pointerEvents: "none", color: "#9d9d9d" } : {}
                }
              >
                Stroke color
              </label>
            </div>
            <div className="input-options outline-stroke-color-options">
              <input
                type="color"
                name="outline-stroke-color"
                id="outline-stroke-color"
                style={
                  !strokeSize ? { pointerEvents: "none", color: "#9d9d9d" } : {}
                }
                value={!strokeSize ? "#9d9d9d" : strokeColor}
                onChange={handleChange("strokeColor")}
              />
              <div
                id="color-code"
                style={
                  !strokeSize ? { pointerEvents: "none", color: "#9d9d9d" } : {}
                }
              >
                {strokeColor.toUpperCase()}
              </div>
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <label
                htmlFor="outline-stroke-opacity-type"
                style={
                  !strokeSize ? { pointerEvents: "none", color: "#9d9d9d" } : {}
                }
              >
                Stroke opacity
              </label>
            </div>
            <div className="input-options outline-stroke-opacity-type-options">
              <input
                type="number"
                name="outline-stroke-opacity-type"
                id="outline-stroke-opacity-type"
                style={
                  !strokeSize ? { pointerEvents: "none", color: "#9d9d9d" } : {}
                }
                value={strokeOpacity}
                onChange={handleChange("strokeOpacity")}
              />
            </div>
            <div className="input-units-icon">%</div>
          </InputContainer>
        </>
      )}
    </AccordionOption>
  );
}
