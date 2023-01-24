import React from "react";
//import styles
import "./Section.css"

/*The section component is defined as a simple component that simply represents a div element. */
/*Children corresponds to the props attribute of a React element */
const Section = ({ children }) => {
  /*The children property is holding a div element that has a class spacing*/
  return <div className="section">{children}</div>;
};

export default Section;
