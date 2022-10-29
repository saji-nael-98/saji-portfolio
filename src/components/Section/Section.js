import React from "react";
import "./Section.css";
const SectionHeader = ({ title }) => (
  <div>
    <h3>{title}</h3>
  </div>
);
function Section(props) {
  const classes = props.className ? `section ${props.className}` : `section`;
  return (
    <section id={props.id || null} className={classes}>
      <SectionHeader name={props.title || "section"} />
      {props.children}
    </section>
  );
}

export default React.useMemo(Section);
