"use client";
import { Badge, DataTable } from "@/components/atoms";
import DefaultButton from "@/components/atoms/Button";
import { formatDate } from "@/helpers";
import { useGetPackagesQuery } from "@/services/api";
import React, { Fragment, useEffect, useMemo, useState } from "react";

const columns = [
  { label: "", tooltip: "", icon: "" },
  { label: "Package Name", tooltip: "", icon: "" },
  { label: "Description", tooltip: "", icon: "" },
  { label: "Status", tooltip: "", icon: "" },
  { label: "Selected Menu", tooltip: "", icon: "" },
  { label: "Added Date", tooltip: "", icon: "" },
  { label: "Last Updated", tooltip: "", icon: "" },
];

export default function PackagesOverview() {
  const [packageList, setPackageList] = useState([]);
  const { data: packageData, error, isLoading } = useGetPackagesQuery();

  const packages = useMemo(
    () => packageData?.data?.packages || [],
    [packageData?.data?.packages]
  );

  useEffect(() => {
    const mappedData: any = packages.map((item: any) => ({
      "": (
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit hover:text-slate-500"></i>
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
        </div>
      ),
      "Package Name": item?.name || "N/A",
      Description: item?.description || "N/A",
      Status:
        item?.status == "active" ? (
          <Badge appearance="success" text="Active" type="outline" />
        ) : item?.status == "pending" ? (
          <Badge appearance="warning" text="Pending" type="outline" />
        ) : (
          <Badge appearance="danger" text="Inactive" type="outline" />
        ),
      "Selected Menu": item?.menu?.name || "N/A",
      "Added Date": formatDate(item?.createdAt) || "N/A",
      "Last Updated": formatDate(item?.updatedAt) || "N/A",
    }));
    setPackageList(mappedData);
  }, [packageData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading package.</div>;
  if (!packageList.length) return <div>No package available.</div>;

  return (
    <Fragment>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Packages Overview
            </h1>
            <p className="text-base text-gray-600 px-0.5 pb-3">
              Manage packages access description.
            </p>
          </div>
          <div className="space-x-2">
            <DefaultButton
              type="pill"
              appearance="dark"
              text="View Logs"
              icon="ki-archive-tick"
            />
            <DefaultButton
              type="pill"
              appearance="primary"
              text="Add New Role"
              icon="ki-plus-squared"
            />
          </div>
        </div>
      </div>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex max-w-full">
          <DataTable
            title="Package List"
            columns={columns}
            data={packageList}
          />
        </div>
      </div>
    </Fragment>
  );
}
