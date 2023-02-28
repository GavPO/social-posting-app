import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <NavBar />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Social Poster
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
