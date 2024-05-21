import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const GridV2 = ({ data, columns, renderCell, rowKey }) => {
  const classNames = React.useMemo(
    () => ({
      wrapper: [
        "w-full",
        "bg-[#FFFFFFDE]",
        "h-[calc(100vh-200px)]",
      ],
      th: ["bg-primary", "text-white", "font-semibold", "text-sm"],
      td: ["text-black", "text-sm"],
      tr: ["hover:bg-primary/10", "cursor-pointer"],
    }),
    []
  );

  return (
    <Table aria-label="Example table with custom cells" classNames={classNames}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item[rowKey]}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default GridV2;
