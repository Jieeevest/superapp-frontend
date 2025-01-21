"use client";
import { Badge, DataTable } from "@/components/atoms";
import DefaultButton from "@/components/atoms/Button";
import { formatDate } from "@/helpers";
import { useGetRolesQuery } from "@/services/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const columns = [
  { label: "", tooltip: "", icon: "" },
  { label: "Role Name", tooltip: "", icon: "" },
  { label: "Description", tooltip: "", icon: "" },
  { label: "Status", tooltip: "", icon: "" },
  { label: "Authorized Menu", tooltip: "", icon: "" },
  { label: "Added Date", tooltip: "", icon: "" },
  { label: "Last Updated", tooltip: "", icon: "" },
];

export default function RolesOverview() {
  const router = useRouter();
  const [roleList, setRoleList] = useState([]);
  const { data: roleData, error, isLoading } = useGetRolesQuery();

  const roles = useMemo(
    () => roleData?.data?.roles || [],
    [roleData?.data?.roles]
  );

  useEffect(() => {
    const mappedData: any = roles.map((role: any) => ({
      "": (
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit hover:text-slate-500"></i>
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
        </div>
      ),
      "Role Name": role?.name || "N/A",
      Description: role?.description || "N/A",
      Status:
        role?.status == "active" ? (
          <Badge appearance="success" text="Active" type="outline" />
        ) : role?.status == "pending" ? (
          <Badge appearance="warning" text="Pending" type="outline" />
        ) : (
          <Badge appearance="danger" text="Inactive" type="outline" />
        ),
      "Authorized Menu": role?.menu || "N/A",
      "Added Date": formatDate(role?.createdAt) || "N/A",
      "Last Updated": formatDate(role?.updatedAt) || "N/A",
    }));
    setRoleList(mappedData);
  }, [roles]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading roles.</div>;
  if (!roleList.length) return <div>No roles available.</div>;

  return (
    <>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Roles Overview</h1>
            <p className="text-base text-gray-600 px-0.5 pb-3">
              Manage role access description.
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
              className="cursor-pointer"
              onClick={() => router.push("/workspace/roles/add")}
            />
          </div>
        </div>
      </div>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex max-w-full">
          <DataTable title="Role List" columns={columns} data={roleList} />
        </div>
      </div>
    </>
  );
}
