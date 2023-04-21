import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./CVbutton.scss";
// import { images } from "../../constants";

import CV from "../../assets/VivekSingh62.pdf";

const CVbutton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "VivekSingh62.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      className="CVButton"
      href={CV}
      download="resume.pdf"
      onClick={handleDownload}
    >
      Download CV
    </a>
  );
};

export default CVbutton;
