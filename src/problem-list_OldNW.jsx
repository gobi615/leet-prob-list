import Problems from "./problems";

import set1 from "./data/set1.json";
import set2 from "./data/set2.json";
import set3 from "./data/set3.json";
import set4 from "./data/set4.json";
import set5 from "./data/set5.json";
import { Fragment, useState } from "react";

const ProblemLists = () => {
  const sets = [
    { name: "Set1", id: 1, set1 },
    { name: "Set2", id: 2, set2 },
    { name: "Set3", id: 3, set3 },
    { name: "Set4", id: 4, set4 },
    { name: "Set5", id: 5, set5 },
  ];
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Fragment>
      <ul class="nav nav-tabs" role="tablist">
        {sets.map((set) => {
          return (
            <li
              key={set.id}
              class="nav-item"
              className={activeItem === "set.id" ? "active" : ""}
              onClick={() => handleItemClick(set.id)}
              data-bs-toggle="tab"
              href={`#${set.id}`}
            >
              <a class="nav-link" href="#">
                {set.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="tab-content">
        <div
          className={
            activeItem === "1"
              ? "active tab-pane container"
              : "tab-pane container"
          }
          id="1"
        >
          Set1
        </div>
        <div
          className={
            activeItem === "2"
              ? "active tab-pane container"
              : "tab-pane container"
          }
          id="2"
        >
          Set2
        </div>
        <div
          className={
            activeItem === "3"
              ? "active tab-pane container"
              : "tab-pane container"
          }
          id="3"
        >
          Set3
        </div>
        <div
          className={
            activeItem === "4"
              ? "active tab-pane container"
              : "tab-pane container"
          }
          id="4"
        >
          Set4
        </div>
        <div
          className={
            activeItem === "5"
              ? "active tab-pane container"
              : "tab-pane container"
          }
          id="5"
        >
          Set5
        </div>
      </div>
    </Fragment>
  );
};

export default ProblemLists;
