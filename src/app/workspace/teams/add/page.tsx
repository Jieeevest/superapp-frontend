import {
  Card,
  DataTable,
  InputCheckbox,
  InputText,
  TextArea,
} from "@/components/atoms";
import DefaultButton from "@/components/atoms/Button";
import Image from "next/image";
import React, { Fragment } from "react";

const columns = [
  { label: "Menu Name", tooltip: "", icon: "" },
  { label: "View", tooltip: "", icon: "" },
  { label: "Create", tooltip: "", icon: "" },
  { label: "Delete", tooltip: "", icon: "" },
  { label: "Update", tooltip: "", icon: "" },
];

const data = [
  {
    "Menu Name": (
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/siap-logo-new.png" alt="logo" width={20} height={20} />
        </div>
        <div className="text-left">
          <p className="font-bold">Employee Management</p>
          <p className="font-light">Sistem Administrasi Pegawai (SIAP)</p>
        </div>
      </div>
    ),
    View: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Create: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Delete: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Update: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
  },
  {
    "Menu Name": (
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/siap-logo-new.png" alt="logo" width={20} height={20} />
        </div>
        <div className="text-left">
          <p className="font-bold">Leave Management Management</p>
          <p className="font-light">Sistem Administrasi Pegawai (SIAP)</p>
        </div>
      </div>
    ),
    View: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Create: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Delete: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Update: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
  },
  {
    "Menu Name": (
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/siap-logo-new.png" alt="logo" width={20} height={20} />
        </div>
        <div className="text-left">
          <p className="font-bold">Article Management</p>
          <p className="font-light">Sistem Administrasi Pegawai (SIAP)</p>
        </div>
      </div>
    ),
    View: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Create: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Delete: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Update: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
  },
  {
    "Menu Name": (
      <div className="flex items-center space-x-4">
        <div className="scale-150">
          <Image
            src="/siap-payment-new.png"
            alt="logo"
            width={20}
            height={20}
          />
        </div>
        <div className="text-left">
          <p className="font-bold">Reimbursement Management</p>
          <p className="font-light">Payment Apps</p>
        </div>
      </div>
    ),
    View: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Create: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Delete: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
    Update: (
      <div className="justify-center items-center text-center ml-8">
        <InputCheckbox onChange={() => console.log()} />
      </div>
    ),
  },
];

export default function AddNewRole() {
  return (
    <Fragment>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Add New Team</h1>
            <p className="text-base text-gray-600 px-0.5  pb-3">
              Add new team description.
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 overflow-auto bg-transparent pt-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex max-w-full min-w-fit">
          <Card
            styleHeader={"justify-start"}
            contentHeader={<p className="font-semibold">Team Information</p>}
            styleFooter={"justify-end"}
            contentFooter={
              <div className="flex justify-end gap-2 ">
                <DefaultButton type="pill" appearance="light" text="Cancel" />
                <DefaultButton
                  type="pill"
                  appearance="warning"
                  text="Save as draft"
                />
                <DefaultButton type="pill" appearance="primary" text="Submit" />
              </div>
            }
          >
            <div className="flex w-full gap-4">
              <div className="w-[600px] space-y-4 my-4 mr-10">
                <InputText
                  type="text"
                  label="Team Name"
                  required={true}
                  placeholder="Team Name"
                  className="w-[600px]"
                />
                <InputText
                  type="text"
                  label="Company Name"
                  required={true}
                  placeholder="Company Name"
                  className="w-[600px]"
                />
                <TextArea
                  label="HQ Address"
                  required={true}
                  placeholder="HQ Address"
                  className="w-[600px]"
                ></TextArea>
                <InputText
                  type="text"
                  label="Team Manager"
                  required={true}
                  placeholder="Team Manager"
                  className="w-[600px]"
                />
                <InputText
                  type="text"
                  label="Manager Email"
                  required={true}
                  placeholder="Manager Email"
                  className="w-[600px]"
                />
                <InputText
                  type="number"
                  label="Manager Phone"
                  required={true}
                  placeholder="Manager Phone"
                  className="w-[600px]"
                />
              </div>
              <div className="w-[600px] space-y-4 my-4">
                <InputText
                  type="text"
                  label="Contract Number"
                  required={true}
                  placeholder="Contract Number"
                  className="w-[600px]"
                />
                <div className={`relative w-[600px]`}>
                  <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                    <label
                      className="form-label max-w-44"
                      htmlFor={"Active Period"}
                    >
                      {"Active Period"}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="relative w-full">....</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
