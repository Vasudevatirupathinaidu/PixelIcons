// Functional component to render an icon preview
export default function IconPreview({
  captureRef,
  icons,
  selectedIconId,
  fillStyles: {
    fillType,
    primaryClr,
    secondaryClr,
    clrAngle,
    clrPosition,
    clrSpread,
    clr,
  },
  outline: { radius, strokeSize, strokeColor, strokeOpacity },
  iconState: { color, size, x, y },
}) {
  const { component: SelectedIcon } =
    icons.find((icon) => icon.id === selectedIconId) || {};

  let customStyle;

  if (fillType === "radial") {
    if (clrPosition !== "center") {
      customStyle = {
        background: `linear-gradient(to ${clrPosition}, ${primaryClr} ${clrSpread}%, ${secondaryClr} 90%)`,
      };
    } else {
      customStyle = {
        background: `radial-gradient(circle at center, ${primaryClr} ${clrSpread}%, ${secondaryClr} 90%)`,
      };
    }
  } else if (fillType === "linear") {
    customStyle = {
      background: `linear-gradient(${clrAngle}deg, ${primaryClr} 10%, ${secondaryClr} 90%)`,
    };
  } else {
    customStyle = {
      background: `${clr}`,
    };
  }

  const r = parseInt(strokeColor.slice(1, 3), 16);
  const g = parseInt(strokeColor.slice(3, 5), 16);
  const b = parseInt(strokeColor.slice(5, 7), 16);
  const boarderColor = `rgba(${r}, ${g}, ${b}, ${strokeOpacity / 100})`;

  customStyle = {
    ...{
      borderRadius: `${radius}px`,
      borderWidth: strokeSize > 250 ? 0 : `${strokeSize}px`,
      borderColor: boarderColor,
      borderStyle: "solid",
      background: strokeSize > 250 ? "none" : customStyle.background,
    },
  };

  return (
    <section id="icon-preview">
      <div ref={captureRef} className="preview" style={customStyle}>
        {SelectedIcon ? (
          <div className="selected-icon">
            <SelectedIcon
              style={{
                color: color,
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          </div>
        ) : (
          <p>No icon selected</p>
        )}
      </div>
    </section>
  );
}
