import { useState } from "react";
import AccordionOption from "./AccordionOption.jsx";
import InputContainer from "./InputContainer.jsx";

// Functional component to render a fill styles accordion
export default function FillStylesAccordion({
  fillStyles: { fillType, primaryClr, secondaryClr, clrAngle, clrSpread, clr },
  setFillStyles,
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Handle toggle of accordion open/close status
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle update of fill type
  const handleFillType = (value) => {
    setFillStyles((prevState) => ({ ...prevState, ...{ fillType: value } }));
  };

  // Handle swapping of primary and secondary colors
  const handleSwapFillStylesColors = () => {
    const pClr = primaryClr;
    const sClr = secondaryClr;

    setFillStyles((prevState) => ({
      ...prevState,
      ...{ primaryClr: sClr },
      ...{ secondaryClr: pClr },
    }));
  };

  return (
    <AccordionOption
      title="Fill Styles"
      className="fill-styles-accordion-details"
      isOpen={isOpen}
      onClick={handleClick}
    >
      {isOpen && (
        <>
          <InputContainer>
            <div>
              <label htmlFor="fill">Fill type</label>
            </div>
            <div className="input-options fill-type-options">
              <select
                name="fill"
                id="fill"
                onChange={(e) => handleFillType(e.target.value)}
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
                <option value="solid">Solid</option>
              </select>
              <p className="drop-down-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="#858585"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12.25 5.75 8 10.25l-4.25-4.5"
                  ></path>
                </svg>
              </p>
            </div>
          </InputContainer>

          {fillType !== "solid" && (
            <>
              <InputContainer>
                <div>
                  <label htmlFor="primary-color">Primary color</label>
                </div>
                <div className="input-options primary-color-options">
                  <input
                    type="color"
                    name="primary-color"
                    id="primary-color"
                    value={primaryClr.toUpperCase()}
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ primaryClr: e.target.value },
                      }))
                    }
                  />
                  <div id="color-code">{primaryClr.toUpperCase()}</div>
                </div>
              </InputContainer>

              <div
                className="swap-fill-style-colors"
                onClick={handleSwapFillStylesColors}
                onMouseEnter={handleSwapFillStylesColors}
                onMouseLeave={handleSwapFillStylesColors}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-6"
                  width="20"
                  height="20"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>

              <InputContainer>
                <div>
                  <label htmlFor="secondary-color">Secondary color</label>
                </div>
                <div className="input-options secondary-color-options">
                  <input
                    type="color"
                    name="secondary-color"
                    id="secondary-color"
                    value={secondaryClr.toUpperCase()}
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ secondaryClr: e.target.value },
                      }))
                    }
                  />
                  <div id="color-code">{secondaryClr.toUpperCase()}</div>
                </div>
              </InputContainer>
            </>
          )}

          {fillType === "linear" && (
            <>
              {/* For Liner Selection */}
              <InputContainer>
                <div>
                  <label htmlFor="angle-type">Angle</label>
                </div>
                <div className="input-options angle-type-options">
                  <input
                    type="number"
                    name="angle-type"
                    id="angle-type"
                    value={clrAngle}
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ clrAngle: e.target.value },
                      }))
                    }
                  />
                </div>
                <div className="input-units-icon">°</div>
              </InputContainer>
            </>
          )}

          {fillType === "radial" && (
            <>
              {/* For Radial Selection */}
              <InputContainer>
                <div>
                  <label htmlFor="position">Position</label>
                </div>
                <div className="input-options position-type-options">
                  <select
                    name="position"
                    id="position"
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ clrPosition: e.target.value },
                      }))
                    }
                  >
                    <option value="center">Center</option>
                    <option value="top">Top</option>
                    <option value="right">Right</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                  </select>
                  <p className="drop-down-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        stroke="#858585"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12.25 5.75 8 10.25l-4.25-4.5"
                      ></path>
                    </svg>
                  </p>
                </div>
              </InputContainer>
              <InputContainer>
                <div>
                  <label htmlFor="spread-type">Spread</label>
                </div>
                <div className="input-options spread-type-options">
                  <input
                    type="number"
                    name="spread-type"
                    id="spread-type"
                    value={clrSpread}
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ clrSpread: e.target.value },
                      }))
                    }
                  />
                </div>
                <div className="input-units-icon">%</div>
              </InputContainer>
            </>
          )}

          {fillType === "solid" && (
            <>
              {/* For Solid Selection */}
              <InputContainer>
                <div>
                  <label htmlFor="color-type">Color</label>
                </div>
                <div className="input-options color-type-options">
                  <input
                    type="color"
                    name="color-type"
                    id="color-type"
                    value={clr.toUpperCase()}
                    onChange={(e) =>
                      setFillStyles((prevState) => ({
                        ...prevState,
                        ...{ clr: e.target.value },
                      }))
                    }
                  />
                  <div id="color-code">{clr.toUpperCase()}</div>
                </div>
              </InputContainer>
            </>
          )}
        </>
      )}
    </AccordionOption>
  );
}
