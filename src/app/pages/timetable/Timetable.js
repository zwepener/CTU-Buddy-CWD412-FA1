import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";

import "./Timetable.css";

export default function Timetable() {
  return (
    <div className="default-box content" id="timetable-container">
      <section>
        <h3>Here is your Time-Table</h3>
        <table>
          <tr>
            <th>Time</th>
            <th>Outcome</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              8:00 - 9:00
            </td>
            <td class="other">Module</td>
            <td class="theory">RD412</td>
            <td class="practical">RD412</td>
            <td class="theory">EN412</td>
            <td class="practical">ENA412</td>
            <td class="group-research">CF412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Theory</td>
            <td class="theory">Practical</td>
            <td class="practical">Theory</td>
            <td class="group-research">Practical</td>
            <td class="group-research">Group Research</td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              9:00 - 10:00
            </td>
            <td class="other">Module</td>
            <td class="theory">RD412</td>
            <td class="practical">RD412</td>
            <td class="theory">EN412</td>
            <td class="practical">ENA412</td>
            <td class="group-research">CF412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Theory</td>
            <td class="theory">Practical</td>
            <td class="practical">Theory</td>
            <td class="group-research">Practical</td>
            <td class="group-research">Theory</td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              10:00 - 11:00
            </td>
            <td class="other">Module</td>
            <td class="theory">RD412</td>
            <td class="practical">RD412</td>
            <td class="theory">EN412</td>
            <td class="practical">ENA412</td>
            <td class="group-research">CF412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Theory</td>
            <td class="theory">Practical</td>
            <td class="practical">Theory</td>
            <td class="group-research">Practical</td>
            <td class="group-research">Practical</td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              11:00 - 12:00
            </td>
            <td class="other">Module</td>
            <td class="theory">RD412</td>
            <td class="practical">RD412</td>
            <td class="theory">EN412</td>
            <td class="practical">ENA412</td>
            <td class="group-research">CF412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Group Research</td>
            <td class="theory">Group Research</td>
            <td class="practical">Theory</td>
            <td class="group-research">Group Research</td>
            <td class="group-research">Practical</td>
          </tr>
          <tr>
            <td class="other">12:00 - 13:00</td>
            <td class="other" colspan="5">
              Break
            </td>
            <td class="other" rowspan="7">
              Weekend!
            </td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              13:00 - 14:00
            </td>
            <td class="other">Module</td>
            <td class="theory">CW412</td>
            <td class="theory" rowspan="6">
              <b>ITS</b>
              <br />
              International
              <br />
              Exam
              <br />
              Prep
            </td>
            <td class="practical">ENA412</td>
            <td class="practical">ENA412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Theory</td>
            <td class="practical">Practical</td>
            <td class="group-research">Practical</td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              14:00 - 15:00
            </td>
            <td class="other">Module</td>
            <td class="theory">CW412</td>
            <td class="practical">ENA412</td>
            <td class="practical">ENA412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Practical</td>
            <td class="practical">Practical</td>
            <td class="group-research">Practical</td>
          </tr>
          <tr>
            <td class="other" rowspan="2">
              15:00 - 16:00
            </td>
            <td class="other">Module</td>
            <td class="theory">CW412</td>
            <td class="practical">ENA412</td>
            <td class="practical">ENA412</td>
          </tr>
          <tr>
            <td class="other">Activity</td>
            <td class="practical">Practical</td>
            <td class="practical">Practical</td>
            <td class="group-research">Practical</td>
          </tr>
        </table>
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
