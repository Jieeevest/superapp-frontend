"use client";

import { Badge, DataTable } from "@/components/atoms";
import DefaultButton from "@/components/atoms/Button";
import { formatDate } from "@/helpers";
import { useGetMenusQuery } from "@/services/api";
import React, { Fragment, useEffect, useMemo, useState } from "react";

const columns = [
  { label: "", tooltip: "", icon: "" },
  { label: "Menu Name", tooltip: "", icon: "" },
  { label: "Status", tooltip: "", icon: "" },
  { label: "Category", tooltip: "", icon: "" },
  { label: "Added Date", tooltip: "", icon: "" },
  { label: "Last Updated", tooltip: "", icon: "" },
];
export default function MenuOverview() {
  const [menuList, setMenuList] = useState([]);
  const { data: menuData, error, isLoading } = useGetMenusQuery();

  const menus = useMemo(
    () => menuData?.data?.menu || [],
    [menuData?.data?.menu]
  );

  useEffect(() => {
    const mappedData: any = menus.map((menu: any) => ({
      "": (
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-notepad-edit hover:text-slate-500"></i>
          <i className="text-2xl bg-slate-100 rounded-md ki-outline ki-trash hover:text-slate-500"></i>
        </div>
      ),
      "Menu Name": menu?.name || "N/A",
      Status:
        menu?.status == "active" ? (
          <Badge appearance="success" text="Active" type="outline" />
        ) : menu?.status == "pending" ? (
          <Badge appearance="warning" text="Pending" type="outline" />
        ) : (
          <Badge appearance="danger" text="Inactive" type="outline" />
        ),
      Category: menu?.category || "N/A",
      "Added Date": formatDate(menu?.createdAt) || "N/A",
      "Last Updated": formatDate(menu?.updatedAt) || "N/A",
    }));
    setMenuList(mappedData);
  }, [menuData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading menu.</div>;
  if (!menuList.length) return <div>No menu available.</div>;

  return (
    <Fragment>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Menu Overview</h1>
            <p className="text-base text-gray-600 px-0.5 pb-3">
              Manage menu access description.
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
          <DataTable title="Menu List" columns={columns} data={menuList} />
        </div>
      </div>
    </Fragment>
  );
}
