import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function RootLayout() {
  return (
    <>
      <TopNav />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}
