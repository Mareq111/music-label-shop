import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import Footer from '../components/Footer';
export default function RootLayout() {
  return (
    <>
      <TopNav />
      <main className="content">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
