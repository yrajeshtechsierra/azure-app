"use client";
import React, { useState } from "react";
import { NavLinks } from "./const";
import { NavLinkValueType } from "./types";
import TextInput from "../textInput/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Navbar = () => {
  const navValues: NavLinkValueType[] = Object.values(NavLinks);
  const [searchValues, setSearchValues] = useState<string>("");

  return (
    <div className="flex justify-between items-center h-[5vh] px-2 border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="w-20">
          <a href="/" title="Logo" target="_blank">
            Logo
          </a>
        </h1>
        <nav>
          <ul className="flex justify-between items-center">
            {navValues.map((link, index) => (
              <li key={link}>
                <Link
                  href={`${link.toLowerCase()}`}
                  className="px-4 py-0.5 hover:bg-gray-200 text-gray-600 transition duration-500 hover:rounded text-sm"
                >
                  {link}
                </Link>
                {index !== navValues.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div>
          <TextInput
            type="text"
            icon={<MagnifyingGlassIcon className="w-5 h-5" />}
            placeholder="Search for anything..."
            value={searchValues}
            onChange={(e) => setSearchValues(e.target.value)}
          />
        </div>
        <h3 className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-fuchsia-600 text-xs text-white font-bold">
          AM
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
