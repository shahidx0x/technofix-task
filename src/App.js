import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { data } from "./constants/fake_data";
import { table_headers } from "./constants/table_data";
import TableControl from "./components/TableControl";

function App() {
  // Initialize the state with the constant value of table headers, where each header object
  // contains two values: the name of the header and its visibility. The default visibility is true.
  // Example: { name: "Title", visibility: true }

  const [columnVisible, setColumnVisible] = useState([...table_headers]);

  // Function to toggle the visibility of a column. It takes the column name as a parameter
  // and toggles its visibility opposite to its current state.

  const toggleColumnVisibility = (columnName) => {
    setColumnVisible((prevState) =>
      prevState.map((header) =>
        header.name === columnName
          ? { ...header, visible: !header.visible }
          : header
      )
    );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="table-hc">
          <h2>Table</h2>
          <TableControl
            columnVisible={columnVisible}
            setColumnVisible={setColumnVisible}
            toggleColumnVisibility={toggleColumnVisibility}
          />
        </div>
        <div className="table-container">
          {/* Applying the single responsibility principle: each component is responsible for a single task. */}
          <DataTable columns={columnVisible} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
