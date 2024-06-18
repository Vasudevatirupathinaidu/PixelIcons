import { useState, useEffect } from "react";
import IconCard from "./IconCard";

// Functional component to render an icon panel
export default function IconPanel({
  icons,
  randomIconId,
  selectedIconId,
  setSelectedIconId,
  selectIconType,
  setSelectIconType,
  fillStyles,
  fillStyles: {
    fillType,
    primaryClr,
    secondaryClr,
    clrAngle,
    clrPosition,
    clrSpread,
    clr,
  },
  isIconPanelOpen,

  presetBgColors,
  setSelectedColorId,
  setFillStyles,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredIcons, setFilteredIcons] = useState(icons);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Handles clicking on an icon
  const handleClick = (id) => {
    setSelectedIconId(id);
  };

  // Handles searching for icons
  const handleSearch = (e) => {
    const name = e.target.value;
    setSearchValue(name.toLowerCase());
  };

  // Filters icons based on the search input
  useEffect(() => {
    const matchedIcons = icons.filter((icon) =>
      icon.name.replace(/-/g, "").toLowerCase().includes(searchValue)
    );
    setFilteredIcons(matchedIcons);
  }, [searchValue, icons]);

  // Generates a random color from preset colors
  function handleRandomColorGenerator() {
    const randomSelectedColorId = Math.floor(
      Math.random() * (presetBgColors.length - 1)
    );

    setSelectedColorId(randomSelectedColorId);

    setFillStyles({
      ...fillStyles,
      ...{
        primaryClr: presetBgColors[randomSelectedColorId][0],
        secondaryClr: presetBgColors[randomSelectedColorId][1],
      },
    });
  }

  // Background color for random preset color generation and icons
  /* let customStyle;
  if (fillType === "linear" || fillType === "radial") {
    customStyle = {
      background: `linear-gradient(45deg, ${fillStyles.primaryClr} 10%, ${fillStyles.secondaryClr} 80%)`,
      border: "2px solid #ffffff",
      color: "#ffffff",
    };
  } else {
    customStyle = {
      background: `${clr}`,
      border: "2px solid #ffffff",
      color: "#ffffff",
    };
  } */

  let customStyle;

  if (fillType === "radial") {
    if (clrPosition !== "center") {
      customStyle = {
        background: `linear-gradient(to ${clrPosition}, ${primaryClr} ${clrSpread}%, ${secondaryClr} 90%)`,
        border: "2px solid #ffffff",
        color: "#ffffff",
      };
    } else {
      customStyle = {
        background: `radial-gradient(circle at center, ${primaryClr} ${clrSpread}%, ${secondaryClr} 90%)`,
        border: "2px solid #ffffff",
        color: "#ffffff",
      };
    }
  } else if (fillType === "linear") {
    customStyle = {
      background: `linear-gradient(${clrAngle}deg, ${primaryClr} 10%, ${secondaryClr} 90%)`,
      border: "2px solid #ffffff",
      color: "#ffffff",
    };
  } else {
    customStyle = {
      background: `${clr}`,
      border: "2px solid #ffffff",
      color: "#ffffff",
    };
  }

  return (
    <IconCard
      id="icon-panel"
      className={!isIconPanelOpen ? "hideLeftIconPanel" : ""}
    >
      <div className="search-section">
        {/* Search Section */}
        <div className="search-icon">
          <label htmlFor="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
              width="20"
              height="20"
              style={{ color: "#858585" }}
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input
            type="text"
            name="search-icon"
            id="search-icon"
            placeholder="Search Icons..."
            autoComplete="off"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <button
          className="random-icon"
          onClick={() => setSelectedIconId(randomIconId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            style={{ color: "#858585" }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m11.75 9.75 2.5 2.25m0 0-2.5 2.25m2.5-2.25h-3.681a4 4 0 0 1-3.767-2.655L6.346 8.07m5.404-6.32L14.25 4m0 0-2.5 2.25M14.25 4h-3.648A4 4 0 0 0 6.82 6.696L6.346 8.07m0 0-.148-.415A4 4 0 0 0 2.431 5H1.75m4.596 3.07-.166.484a4 4 0 0 1-3.782 2.696H1.75"
            ></path>
          </svg>
        </button>

        <button
          className="random-color"
          style={customStyle}
          onClick={handleRandomColorGenerator}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="size-6"
            width="20"
            height="20"
            style={{ color: "#ffffff" }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <div className="icons-section">
        {/* Icons Selection */}
        <p>All Icons</p>
        <div className="icon-types">
          {/* Icon Types Selection */}
          <button
            className="icons-solid"
            style={{
              border: selectIconType === "solid" ? "1px solid #ffffff" : "",
            }}
            onClick={() => setSelectIconType("solid")}
          >
            <p>Solid</p>
          </button>
          <button
            className="icons-thin"
            style={{
              border: selectIconType === "thin" ? "1px solid #ffffff" : "",
            }}
            onClick={() => setSelectIconType("thin")}
          >
            <p>Thin</p>
          </button>
        </div>
        <div className="icon-gallery">
          {/* Render filtered icons */}
          {filteredIcons.map(({ id, component: Icon }) => (
            <div
              key={id}
              className="icon-item"
              style={{
                background:
                  hoveredIcon === id || selectedIconId === id
                    ? customStyle.background
                    : "",
                border: selectedIconId === id ? "1px solid #ffffff" : "",
              }}
              onClick={() => handleClick(id)}
              onMouseEnter={() => setHoveredIcon(id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Icon className="icon" />
            </div>
          ))}
        </div>
      </div>
    </IconCard>
  );
}
