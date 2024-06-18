import IconPanel from "./components/IconPanel";
import IconPreview from "./components/IconPreview";
import IconOptions from "./components/IconOptions";
import IconCustomizer from "./components/IconCustomizer";
import OpenCloseToggle from "./components/OpenCloseToggle";

import PresetsAccordion from "./components/PresetsAccordion";
import FillStylesAccordion from "./components/FillStylesAccordion";
import OutlineAccordion from "./components/OutlineAccordion";
import IconAccordion from "./components/IconAccordion";
import Connect from "./components/Connect";

import solidIcons from "./assets/solid-icons";
import thinIcons from "./assets/thin-icons";

import { useEffect, useState, useRef } from "react";

const presetBgColors = [
  ["#ff6858", "#f993d6"],
  ["#1c92d2", "#f2fcfe"],
  ["#fc4a1a", "#f7b733"],
  ["#11998e", "#38ef7d"],
  ["#ff5e62", "#ff9966"],
  ["#111111", "#4d4d4d"],
  ["#22c1c3", "#fdbb2d"],
  ["#007991", "#78ffd6"],
  ["#f794a4", "#fdd6bd"],
  ["#4568dc", "#b06ab3"],
  ["#904e95", "#e96443"],
  ["#ee0979", "#ff6a00"],
  ["#614385", "#516395"],
  ["#b24592", "#f15f79"],
  ["#56b852", "#00c26f"],
  ["#00c6ff", "#0072ff"],
  ["#b993d6", "#8ca6db"],
  ["#f2709c", "#ff9472"],
  ["#fccb90", "#d57eeb"],
  ["#739B1B", "#FdC72B"],
  ["#7474bf", "#348ac7"],
  ["#0e7991", "#eeedbc"],
  ["#f8b500", "#fdfabb"],
  ["#d31027", "#f15f79"],
];

function App() {
  let storedIsIconPanelOpen = JSON.parse(
    window.localStorage.getItem("isIconPanelOpen")
  )
    ? JSON.parse(window.localStorage.getItem("isIconPanelOpen"))
    : false;

  let storedIsIconOptionOpen = JSON.parse(
    window.localStorage.getItem("isIconOptionOpen")
  )
    ? JSON.parse(window.localStorage.getItem("isIconOptionOpen"))
    : false;

  const [isIconPanelOpen, setIsIconPanelOpen] = useState(storedIsIconPanelOpen);
  const [isIconOptionOpen, setIsIconOptionOpen] = useState(
    storedIsIconOptionOpen
  );

  const [selectedIconId, setSelectedIconId] = useState(0);

  const [selectedColorId, setSelectedColorId] = useState(0);

  const [selectIconType, setSelectIconType] = useState("solid");

  const [fillStyles, setFillStyles] = useState({
    fillType: "linear",
    primaryClr: presetBgColors[selectedColorId][0],
    secondaryClr: presetBgColors[selectedColorId][1],
    clrAngle: 45,
    clrPosition: "right",
    clrSpread: 10,
    clr: "#111111",
  });

  const [outline, setOutline] = useState({
    radius: 125,
    strokeSize: 0,
    strokeColor: "#ffffff",
    strokeOpacity: 100,
  });

  const [iconState, setIconState] = useState({
    color: "#ffffff",
    size: 380,
    x: 0,
    y: 0,
  });

  const captureRef = useRef(null);

  const icons = selectIconType === "solid" ? solidIcons : thinIcons;

  const randomIconId = Math.floor(Math.random() * (icons.length - 1));

  const randomSelectedColorId = Math.floor(
    Math.random() * (presetBgColors.length - 1)
  );

  useEffect(() => {
    setSelectedIconId(randomIconId);
  }, []);

  useEffect(() => {
    setSelectedColorId(randomSelectedColorId);
  }, []);

  useEffect(() => {
    setFillStyles({
      ...fillStyles,
      ...{
        primaryClr: presetBgColors[randomSelectedColorId][0],
        secondaryClr: presetBgColors[randomSelectedColorId][1],
      },
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "isIconPanelOpen",
      JSON.stringify(isIconPanelOpen)
    );
    window.localStorage.setItem(
      "isIconOptionOpen",
      JSON.stringify(isIconOptionOpen)
    );
  }, [isIconPanelOpen, isIconOptionOpen]);

  return (
    <main id="container">
      <OpenCloseToggle
        isIconPanelOpen={isIconPanelOpen}
        isIconOptionOpen={isIconOptionOpen}
        setIsIconPanelOpen={setIsIconPanelOpen}
        setIsIconOptionOpen={setIsIconOptionOpen}
      />
      <Connect />
      <IconPanel
        icons={icons}
        randomIconId={randomIconId}
        selectedIconId={selectedIconId}
        setSelectedIconId={setSelectedIconId}
        selectIconType={selectIconType}
        setSelectIconType={setSelectIconType}
        fillStyles={fillStyles}
        isIconPanelOpen={isIconPanelOpen}
        // line break
        presetBgColors={presetBgColors}
        selectedColorId={selectedColorId}
        setSelectedColorId={setSelectedColorId}
        setFillStyles={setFillStyles}
      />

      <IconPreview
        captureRef={captureRef}
        icons={icons}
        selectedIconId={selectedIconId}
        fillStyles={fillStyles}
        outline={outline}
        iconState={iconState}
      />

      <IconOptions isIconOptionOpen={isIconOptionOpen}>
        <PresetsAccordion
          presetBgColors={presetBgColors}
          selectedColorId={selectedColorId}
          setSelectedColorId={setSelectedColorId}
          fillStyles={fillStyles}
          setFillStyles={setFillStyles}
        />

        <FillStylesAccordion
          fillStyles={fillStyles}
          setFillStyles={setFillStyles}
        />

        <OutlineAccordion outline={outline} setOutline={setOutline} />

        <IconAccordion iconState={iconState} setIconState={setIconState} />
      </IconOptions>

      <IconCustomizer
        icons={icons}
        selectedIconId={selectedIconId}
        captureRef={captureRef}
      />
    </main>
  );
}

export default App;
