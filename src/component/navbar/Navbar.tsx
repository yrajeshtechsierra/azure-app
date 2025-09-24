"use client";
import React, { useState } from "react";
import { NavLinks } from "./const";
import { NavLinkValueType } from "./types";
import TextInput from "../textInput/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const Navbar: React.FC = () => {
  const navValues: NavLinkValueType[] = Object.values(NavLinks);
  const [searchValues, setSearchValues] = useState<string>("");

  return (
    <div className="flex justify-between items-center border-b py-1">

      <div className="flex justify-between items-center">
        <h1 className="w-10">
          <a href="/" title="Logo" target="_blank">
            Logo
          </a>
        </h1>
        <nav>
          <ul className="flex justify-between items-center">
            {navValues.map((link) => (
              <li key={link}>
                <a href={`${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center">
        <TextInput
          type="text"
          icon={<MagnifyingGlassIcon className="w-5 h-5" />}
          placeholder="Search for anything..."
          value={searchValues}
          onChange={(e) => setSearchValues(e.target.value)}
        />
        <h3>AM</h3>
      </div>
    </div>
  );
};

export default Navbar;
