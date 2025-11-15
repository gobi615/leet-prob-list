import Problems from "./problems";

import set1 from "./data/set1.json";
import set2 from "./data/set2.json";
import set3 from "./data/set3.json";
import set4 from "./data/set4.json";
import set5 from "./data/set5.json";
import { Fragment, useState } from "react";

const ProblemLists = () => {
  const sets = [
    { name: "Set1", id: 1, probIds: set1 },
    { name: "Set2", id: 2, probIds: set2 },
    { name: "Set3", id: 3, probIds: set3 },
    { name: "Set4", id: 4, probIds: set4 },
    { name: "Set5", id: 5, probIds: set5 },
  ];
  const [activeItem, setActiveItem] = useState(4);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        className="position-sticky"
        style={{ top: 0, zIndex: 1000, background: "white" }}
      >
        <ul className="nav nav-tabs" role="tablist">
          {sets.map((set) => {
            return (
              <li
                key={set.id}
                className={`nav-item ${activeItem === set.id ? "active" : ""}`}
              >
                <a
                  className={`nav-link ${
                    activeItem === set.id ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(set.id)}
                  data-bs-toggle="tab"
                  href={`#${set.name}`}
                >
                  {set.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tab-content mt-3">
        {sets.map((set) => (
          <div
            key={set.id}
            className={`tab-pane container fade ${
              activeItem === set.id ? "show active" : ""
            }`}
            id={`${set.name}`}
          >
            <Problems set={set.probIds} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemLists;
