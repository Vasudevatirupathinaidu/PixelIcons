import { useState } from "react";
import AccordionOption from "./AccordionOption.jsx";

// Functional component to render a presets accordion
export default function PresetsAccordion({
  presetBgColors,
  selectedColorId,
  setSelectedColorId,
  fillStyles,
  setFillStyles,
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Handles the accordion open/close state
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Handle selection of a color preset
  function handleSelectedColorId(id) {
    setSelectedColorId(id);
    setFillStyles({
      ...fillStyles,
      ...{
        primaryClr: presetBgColors[id][0],
        secondaryClr: presetBgColors[id][1],
      },
    });
  }

  return (
    <AccordionOption
      title="Presents"
      className="presets-accordion-details"
      isOpen={isOpen}
      onClick={handleClick}
    >
      {isOpen && (
        <>
          {presetBgColors.map((colors, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
                border: `${selectedColorId === i ? "2px solid #ffffff" : ""}`,
              }}
              className={`bg-clr bg-clr-${i + 1}`}
              onClick={() => handleSelectedColorId(i)}
            ></div>
          ))}
        </>
      )}
    </AccordionOption>
  );
}
