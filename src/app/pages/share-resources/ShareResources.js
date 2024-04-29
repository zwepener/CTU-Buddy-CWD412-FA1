// These are sample file only, the actual files will be more dynamically imported with the help of a database
import file1 from "./assets/static/samples/CF412 FA1 (2024 Q1).pdf";
import file2 from "./assets/static/samples/ENA412 FA1 (2024 Q1).pdf";
import file3 from "./assets/static/samples/RD412 FA1 (2024 Q1).pdf";

import "./ShareResources.css";

// Create the function for the 'onclick' event of the search button
function searchClick() {
  alert(
    "Due to the static nature of FA 1, no logic has been added to this element yet."
  );
}

// Create the function for the 'onclick' event of the upload button
function uploadClick() {
  alert(
    "Due to the static nature of FA 1, no logic has been added to this element yet."
  );
}

export default function ShareResources() {
  return (
    <div className="default-box content" id="share-resources-container">
      <div id="search-area">
        <input type="text" id="search-input" placeholder="Search Files . . ." />
        <button
          className="default-button"
          id="search-button"
          onClick={searchClick}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          &nbsp;Search
        </button>
      </div>
      <div className="default-box table-fixed-header">
        <table>
          <thead>
            <tr>
              <th width="30%" scope="col">
                Title
              </th>
              <th width="50%" scope="col">
                Filename
              </th>
              <th width="5%" scope="col"></th>
              <th width="15%" scope="col">
                Module
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CF412 - FA1</td>
              <td>CF412 FA1 (2024 Q1).pdf</td>
              <td>
                <a className="default-button" href={file1} download>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
              <td>CF412</td>
            </tr>
            <tr>
              <td>ENA412 - FA1</td>
              <td>ENA412 FA1 (2024 Q1).pdf</td>
              <td>
                <a className="default-button" href={file2} download>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
              <td>ENA412</td>
            </tr>
            <tr>
              <td>RD412 - FA1</td>
              <td>RD412 FA1 (2024 Q1).pdf</td>
              <td>
                <a className="default-button" href={file3} download>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
              <td>RD412</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button className="default-button" id="upload" onClick={uploadClick}>
          <i className="fa-solid fa-upload"></i>
          &nbsp;Upload
        </button>
      </div>
    </div>
  );
}
