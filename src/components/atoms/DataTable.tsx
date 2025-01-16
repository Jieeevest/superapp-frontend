import React from "react";
import InputText from "./InputText";
import DefaultButton from "./Button";
import Select from "./Select";

// Define types for column and row data
interface Column {
  label: string;
  tooltip?: string;
  icon?: string;
}

interface DataTableProps {
  title?: string;
  className?: string;
  columns: Column[]; // Array of columns with label, tooltip, and optional icon
  data: any;
  pageSizeOptions?: number[]; // Optional page size options for pagination
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  className = "",
  columns,
  data,
  pageSizeOptions = [5, 10, 25, 50], // Default page size options
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="grid">
        <div className="card card-grid min-w-full">
          <div className="card-header py-5 flex-wrap">
            <h3 className="card-title">{title || "Data Table"}</h3>
            <div className="flex gap-2">
              <InputText type="text" placeholder="Search" />
              <Select
                className="w-40"
                optionValue={[
                  { label: "Active", value: "active" },
                  { label: "Pending", value: "pending" },
                  { label: "Inactive", value: "inactive" },
                ]}
              />
              <DefaultButton
                type="pill"
                appearance="primary"
                text="Filter"
                icon="ki-filter"
              />
            </div>
          </div>
          <div className="card-body">
            <div
              data-datatable="true"
              data-datatable-page-size="5"
              data-datatable-state-save="true"
              id="datatable_1"
            >
              <div className="scrollable-x-auto">
                <table
                  className="table table-auto table-border"
                  data-datatable-table="true"
                >
                  <thead>
                    <tr>
                      {columns.map((column, index) => (
                        <th key={index} className="w-[185px] text-center">
                          <span className="sort">
                            <span className="sort-label">
                              {column.tooltip ? (
                                <span
                                  className="pt-px"
                                  data-tooltip="true"
                                  data-tooltip-offset="0, 5px"
                                  data-tooltip-placement="top"
                                >
                                  <i className={column.icon} />
                                  <span
                                    className="tooltip max-w-48"
                                    data-tooltip-content="true"
                                  >
                                    {column.tooltip}
                                  </span>
                                </span>
                              ) : (
                                column.label
                              )}
                            </span>
                            {column.label && (
                              <span className="sort-icon"></span>
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row: any, rowIndex: number) => (
                      <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                          <td key={colIndex} className="text-center">
                            {row[column.label] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                <div className="flex items-center gap-2">
                  Show
                  <select
                    className="select select-sm w-16"
                    data-datatable-size="true"
                    name="perpage"
                  >
                    {pageSizeOptions.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  per page
                </div>
                <div className="flex items-center gap-4">
                  <span data-datatable-info="true"></span>
                  <div
                    className="pagination"
                    data-datatable-pagination="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
