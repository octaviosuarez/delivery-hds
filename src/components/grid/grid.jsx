import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Modal } from "@nextui-org/react";
const Grid = ({ colDefs, rowData, quickFilterText }) => {
  const gridOptions = {
    autoSizeStrategy: {
      type: "fitGridWidth",
      defaultMinWidth: 100,
      viewportMaxWidth: 900,

      columnLimits: [
        {
          colId: "country",
          minWidth: 900,
        },
      ],
    },
    // other grid options ...
  };

  return (
    <div className="ag-theme-quartz" style={{ height: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        gridOptions={gridOptions}
        quickFilterText={quickFilterText}
      />
    </div>
  );
};

export default Grid;
