import React from "react";

const TableControl = ({ columnVisible, toggleColumnVisibility }) => {
  // in this controll component we receving the columnVisible and toggleColumnVisible annd changeing the state inorder to change the column visibility
  return (
    <div className="dropdown">
      <img src="./menu.jpg" width="40px" height="40px" alt="menu-icon"></img>
      <div class="dropdown-content">
        {columnVisible.map((it, index) => (
          <div
            key={index}
            // this recive the name of the column as argument and change the state of parent componet,
            // and in the end we got our expected behavior which is successfully show and hide the component
            onClick={() => toggleColumnVisibility(it.name)}
            id="option-box"
            style={{ display: "flex", gap: "10px", padding: "5px" }}
          >
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={it.visible}
            />
            <p style={{ fontSize: "20px" }}>{it.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableControl;
