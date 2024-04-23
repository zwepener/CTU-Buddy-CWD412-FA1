import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";

import timetable_img from "../../resources/images/timetable.png";

import "./Timetable.css";

export default function Timetable() {
  return (
    <div className="default-box content" id="timetable-container">
      <section>
        <h3>Here is your Time-Table</h3>
        <img src={timetable_img} alt="Timetable" />
        <br />
        <div className="typewriter">
          <span>Future&nbsp;</span>
          <Typewriter
            options={{
              strings: ["Developer", "Engineer", "Designer"],
              loop: true,
              autoStart: true,
            }}
          />
        </div>
      </section>

      <Snowfall />
    </div>
  );
}
