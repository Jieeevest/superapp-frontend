"use client";
import Navbar from "@/components/molecules/Navbar";
import Sidebar from "@/components/molecules/Sidebar";
import { Provider } from "react-redux";
import { store } from "../../services/store";

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
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

          {children}
        </div>
      </div>
    </Provider>
  );
}
