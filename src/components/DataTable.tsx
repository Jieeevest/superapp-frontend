import React from "react";

interface DataTableProps {
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="grid">
        <div className="card card-grid min-w-full">
          <div className="card-header py-5 flex-wrap">
            <h3 className="card-title">Static DataTable</h3>
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
                      <th className="w-[100px] text-center">
                        <span className="sort asc">
                          <span className="sort-label">Status</span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                      <th className="min-w-[185px]">
                        <span className="sort">
                          <span className="sort-label">Last Session</span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                      <th className="w-[185px]">
                        <span className="sort">
                          <span className="sort-label">Label</span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                      <th className="w-[185px]">
                        <span className="sort">
                          <span className="sort-label">
                            <span
                              className="pt-px"
                              data-tooltip="true"
                              data-tooltip-offset="0, 5px"
                              data-tooltip-placement="top"
                            >
                              <i className="ki-outline ki-information-2 text-lg leading-none"></i>
                              <span
                                className="tooltip max-w-48"
                                data-tooltip-content="true"
                              >
                                Merchant account providers
                              </span>
                            </span>
                            Method
                          </span>
                          <span className="sort-icon"></span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <span className="badge badge-dot size-2 bg-success"></span>
                      </td>
                      <td>6 Aug, 2024</td>
                      <td>HR Dept</td>
                      <td>Basic auth</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="badge badge-dot size-2 bg-success"></span>
                      </td>
                      <td>22 Jul 2024</td>
                      <td>Guy Hawkins</td>
                      <td>Web</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="badge badge-dot size-2 bg-danger"></span>
                      </td>
                      <td>18 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>SSH</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="badge badge-dot size-2 bg-success"></span>
                      </td>
                      <td>15 Jul, 2024</td>
                      <td>Sales Dept</td>
                      <td>Kerberos</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="badge badge-dot size-2 bg-warning"></span>
                      </td>
                      <td>30 Jul, 2024</td>
                      <td>Legal Dept</td>
                      <td>Token</td>
                    </tr>
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
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>d<option>50</option>
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
