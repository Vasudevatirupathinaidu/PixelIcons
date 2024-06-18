import IconCard from "./IconCard.jsx";

// Functional component to render an icon options
export default function IconOptions({ children, isIconOptionOpen }) {
  return (
    <IconCard
      id="icon-options"
      className={!isIconOptionOpen ? "hideRightIconOptions" : ""}
    >
      {children}
    </IconCard>
  );
}
