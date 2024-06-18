// Functional component to render an open close toggle
export default function OpenCloseToggle({
  isIconPanelOpen,
  setIsIconPanelOpen,
  isIconOptionOpen,
  setIsIconOptionOpen,
}) {
  // Handles toggle function for the icon panel
  const handleToggleIconPanel = () => {
    setIsIconPanelOpen((prevState) => !prevState);
  };

  // Handles toggle function for the icon options
  const handleToggleIconOption = () => {
    setIsIconOptionOpen((prevState) => !prevState);
  };
  return (
    <div className="close-open-toggle">
      {/* Icon Panel Toggle Button */}
      <div
        className={isIconPanelOpen ? "open-toggle" : "close-toggle"}
        onClick={handleToggleIconPanel}
      >
        {isIconPanelOpen ? (
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
              stroke="#898989"
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
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
              stroke="#898989"
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Icon Options Toggle Button */}
      <div
        className={isIconOptionOpen ? "open-toggle" : "close-toggle"}
        onClick={handleToggleIconOption}
      >
        {isIconOptionOpen ? (
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
              stroke="#898989"
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
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
              stroke="#898989"
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
