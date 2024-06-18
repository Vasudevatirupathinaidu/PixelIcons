// Functional component to render an accordion option
export default function AccordionOption({
  title,
  children,
  className,
  isOpen,
  onClick,
}) {
  return (
    <article className="accordion-option">
      <div className="accordion" onClick={onClick}>
        <p className="accordion-title">{title}</p>
        <p className="accordion-icon">
          {isOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#898989"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 10.25 8 5.75l4.25 4.5"
                ></path>
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#898989"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.25 5.75 8 10.25l-4.25-4.5"
                ></path>
              </svg>
            </>
          )}
        </p>
      </div>

      <div className={`accordion-details ${className}`}>{children}</div>
    </article>
  );
}
