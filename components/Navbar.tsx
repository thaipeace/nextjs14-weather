"use client";

import { useLocationContext } from "@/context/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const { weather } =  useLocationContext();

  return (
    <header>
      <nav className="w-full flexBetween py-3">
        <Link href="/" className="flex items-center sm:gap-3 gap-1">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{weather?.name}</span>
        </Link>
        <div className="flexEnd sm:gap-3 gap-2">
          <Link href="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
