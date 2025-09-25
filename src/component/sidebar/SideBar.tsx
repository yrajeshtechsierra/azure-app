"use client";

import React, { useContext } from "react";
import {
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { sideBarLinks } from "./const";
import { SidebarContext } from "@/provider/SidebarProvider";

const SideBar = () => {
  const { handleToggle, isOpen } = useContext(SidebarContext);

  return (
    <section
      className={`${
        isOpen ? "w-[55px]" : "w-[300px]"
      } flex flex-col border-r border-gray-300 shadow bg-gray-200`}
    >
      {/* Header */}
      <div
        className={`flex justify-between items-center mx-4 border-b border-gray-300 ${
          isOpen ? "flex-col py-2" : "py-4"
        }`}
      >
        <div className="flex items-center">
          <h3
            className={`w-5 h-5 rounded bg-orange-500 text-white text-xs flex justify-center items-center font-bold ${
              isOpen ? "mr-0 mb-2" : "mr-4"
            }`}
          >
            R
          </h3>
          <span className={`text-sm font-bold ${isOpen ? "hidden" : "flex"}`}>
            Recurit
          </span>
        </div>
        <span className="cursor-pointer">+</span>
      </div>

      {/* Body */}
      <div
        className={`${isOpen ? "h-[80vh]" : "h-[84vh]"} mx-4 overflow-y-scroll`}
      >
        <ul className="flex flex-col py-4 space-y-6">
          {sideBarLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`${link.name.toLowerCase()}`}
                className="flex items-center"
              >
                <span>
                  <link.icon className="w-5 h-5" />
                </span>
                {!isOpen && (
                  <span className="font-medium ml-2 text-sm">{link.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        className={`flex justify-between items-center mx-4 border-t border-gray-300 ${
          isOpen ? "flex-col py-2" : "py-4"
        }`}
      >
        <div className="flex items-center">
          <Cog6ToothIcon className={`w-5 h-5 ${isOpen ? "mr-0 mb-2" : "mr-4"}`} />
          <span className={`text-sm ${isOpen ? "hidden" : "flex"}`}>
            Project settings
          </span>
        </div>
        <span className="cursor-pointer" onClick={handleToggle}>
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </span>
      </div>
    </section>
  );
};

export default SideBar;
