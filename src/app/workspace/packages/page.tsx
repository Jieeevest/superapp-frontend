import { Badge, DataTable } from "@/components/atoms";
import Navbar from "@/components/molecules/Navbar";
import Sidebar from "@/components/molecules/Sidebar";
import React from "react";

const columns = [
  { label: "", tooltip: "", icon: "" },
  { label: "Package Name", tooltip: "", icon: "" },
  { label: "Description", tooltip: "", icon: "" },
  { label: "Status", tooltip: "", icon: "" },
  { label: "Selected Menu", tooltip: "", icon: "" },
  { label: "Added Date", tooltip: "", icon: "" },
  { label: "Last Updated", tooltip: "", icon: "" },
];

const data = [
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Package Name": "Teams",
    Description: "Short Description",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    "Selected Menu": "Data Menu",
    "Added Date": "6 Aug, 2024",
    "Last Updated": "6 Aug, 2025",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Package Name": "Members",
    Description: "Short Description",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    "Selected Menu": "Data Menu",
    "Added Date": "6 Aug, 2024",
    "Last Updated": "6 Aug, 2025",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Package Name": "Employee",
    Description: "Short Description",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    "Selected Menu": "Data Menu",
    "Added Date": "6 Aug, 2024",
    "Last Updated": "6 Aug, 2025",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Package Name": "Overtime",
    Description: "Short Description",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    "Selected Menu": "Data Menu",
    "Added Date": "6 Aug, 2024",
    "Last Updated": "6 Aug, 2025",
  },
  {
    "": (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit  hover:text-slate-500"></i>
        <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
      </div>
    ),
    "Package Name": "Reimbursement",
    Description: "Short Description",
    Status: <Badge appearance="success" text="Active" type="outline" />,
    "Selected Menu": "Data Menu",
    "Added Date": "6 Aug, 2024",
    "Last Updated": "6 Aug, 2025",
  },
];

export default function Packages() {
  return (
    <div className="flex h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/siap-background-1.png')" }}
      />

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Navbar */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 ">
          <h1 className="text-2xl font-bold text-gray-800">
            Packages Overview
          </h1>
          <p className="text-base text-gray-600 px-0.5 border-b-2 border-gray-400 pb-3">
            Manage package access description.
          </p>
        </div>
        <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 mt-5">
          <div className="flex max-w-full">
            <DataTable title="Package List" columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
