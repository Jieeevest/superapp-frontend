"use client";
import { Badge, DataTable } from "@/components/atoms";
import DefaultButton from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const columns = [
  { label: "", tooltip: "", icon: "" },
  { label: "Team Name", tooltip: "", icon: "" },
  { label: "Status", tooltip: "", icon: "" },
  { label: "Package", tooltip: "", icon: "" },
  { label: "Joined Date", tooltip: "", icon: "" },
  { label: "Expired Date", tooltip: "", icon: "" },
  { label: "Period", tooltip: "", icon: "" },
  { label: "Quota", tooltip: "", icon: "" },
];

const data = [
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-bookmark hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Team Name": "Alpha Team",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    Package: "Simple Package",
    "Joined Date": "6 Aug, 2024",
    "Expired Date": "6 Aug, 2025",
    Period: "1 Year",
    Quota: "10 Persons",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-bookmark hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Team Name": "Beta Team",
    Status: <Badge appearance="danger" text="Inactive" type="outline" />,
    Package: "Company Package",
    "Joined Date": "22 Jul, 2024",
    "Expired Date": "22 Jul, 2025",
    Period: "1 Year",
    Quota: "20 Persons",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-bookmark hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Team Name": "Gamma Team",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    Package: "Small Package",
    "Joined Date": "18 Jul, 2024",
    "Expired Date": "18 Jul, 2025",
    Period: "1 Year",
    Quota: "15 Persons",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-bookmark hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Team Name": "Delta Team",
    Status: <Badge appearance="warning" text="Pending" type="outline" />,
    Package: "Company Package",
    "Joined Date": "15 Jul, 2024",
    "Expired Date": "15 Jul, 2025",
    Period: "1 Year",
    Quota: "25 Persons",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-bookmark hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Team Name": "Epsilon Team",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    Package: "Professional Package",
    "Joined Date": "30 Jul, 2024",
    "Expired Date": "30 Jul, 2025",
    Period: "1 Year",
    Quota: "30 Persons",
  },
];

export default function TeamsOverview() {
  const router = useRouter();
  return (
    <Fragment>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Teams Overview</h1>
            <p className="text-base text-gray-600 px-0.5 pb-3">
              Manage team access description.
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
              onClick={() => router.push("/workspace/teams/add")}
              type="pill"
              appearance="primary"
              text="Add New Team"
              icon="ki-plus-squared"
            />
          </div>
        </div>
      </div>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex max-w-full">
          <DataTable title="Team List" columns={columns} data={data} />
        </div>
      </div>
    </Fragment>
  );
}
