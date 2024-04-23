import { useRef, useEffect } from "react";
import { Snowfall } from "react-snowfall";

import timetable_img from "../../resources/images/timetable.png";

import "./Timetable.css";

export default function Timetable() {
  const JobTitles = ["Designer", "Developer", "Enigneer"];
  const TyperRef = useRef(null);

  useEffect(() => {
    const TyperElem = TyperRef.current;

    const handleAnimationIterationEnd = (event) => {
      if (event.animationName == "typing") {
        const prevTextContent = TyperElem.textContent;
        const nextIndex = (JobTitles.indexOf(prevTextContent) + 1) % JobTitles.length;
        TyperElem.textContent = JobTitles[nextIndex];
      }
    };

    TyperElem.addEventListener("animationiteration", handleAnimationIterationEnd);

    return () => {
      TyperElem.removeEventListener("animationiteration", handleAnimationIterationEnd);
    };
  }, []); // Empty dependency array ensures the listener is added only once

  return (
    <div className="default-box content" id="timetable-container">
      <section>
        <h3>Here is your Time-Table</h3>
        <img src={timetable_img} alt="Timetable" />
        <br />
        <h1 className="typewriter">
          Future&nbsp;
          <span ref={TyperRef} id="typer">Enigneer</span>
        </h1>
      </section>

      {/* Snowflake animation */}
      <Snowfall />
    </div>
  );
}
