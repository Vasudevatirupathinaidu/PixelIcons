import html2canvas from "html2canvas";

// Functional component to render an icon cutomizer
export default function IconCustomizer({ icons, selectedIconId, captureRef }) {
  // Handle capturing the element as an image and downloading it
  const handleCaptureClick = (extension) => {
    const element = captureRef.current;

    if (element) {
      html2canvas(element, { backgroundColor: null })
        .then((canvas) => {
          const imgData = canvas.toDataURL(`image/${extension}`);
          const link = document.createElement("a");
          link.href = imgData;
          link.download = icons[selectedIconId].name + "." + extension;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error capturing the element:", error);
        });
    }
  };

  return (
    <div className=" icon-customizer">
      {/* PNG download button */}
      <span
        className="icon-downloader png-downloader"
        onClick={() => handleCaptureClick("png")}
      >
        <p>PNG</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          width="15"
          height="15"
          style={{ color: "#f9f9f9" }}
        >
          <path
            stroke="#f9f9f9"
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      {/* JPG download button */}
      <span
        className="icon-downloader jpg-downloader"
        onClick={() => handleCaptureClick("jpg")}
      >
        <p>JPG</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          width="15"
          height="15"
          style={{ color: "#f9f9f9" }}
        >
          <path
            stroke="#f9f9f9"
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}
