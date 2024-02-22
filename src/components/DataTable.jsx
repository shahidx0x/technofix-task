import React from "react";
import TableData from "./TableData";

const DataTable = ({ columns, data }) => {
  return (
    <div>
      <div id="table">
        <div className="table-header-row">
          {/* here we filtering if the visibility of any column is false or not if
          false then it will be ignored by filter and only show you the header
          which visiblity is set to true */}
          {columns
            .filter((each) => each.visible)
            .map((table_header, index) => (
              <div key={index} className="cell">
                <h3 className="table-header">{table_header.name}</h3>
              </div>
            ))}
        </div>
        {/* here we passing the data to TableData Component to give the information
        which header is currently visible and which is not based on that we can
        easily hide any section if we need */}
        {data.map((t_data, index) => (
          <TableData key={index} t_data={t_data} visibleColumn={columns} />
        ))}
      </div>
    </div>
  );
};

export default DataTable;
