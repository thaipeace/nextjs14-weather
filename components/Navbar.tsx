"use client";
import { useLocationContext } from "@/context/ContextProvider";
import { getWeatherByLocationService } from "@/services";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const { search, setSearch, setWeather, errorMsg, setErrorMsg } =
    useLocationContext();

  const handleClick = async () => {
    const term = search.toLowerCase();
    try {
      const weather = await getWeatherByLocationService(term);
      setWeather(weather);
      setErrorMsg(null);
    } catch (error) {
      setWeather(null);
      setErrorMsg("404");
    }
  };

  return (
    <header className="padding-x">
      <nav className="w-full flexBetween py-3">
        <div className="flex items-center sm:gap-3 gap-1">
          <Image src="/logo/logo.svg" width={40} height={40} alt="logo-icon" />
        </div>
        <div className="flexEnd sm:gap-3 gap-2">
          <Input
            type="text"
            placeholder="Search Location..."
            className="sm:w-[150px] lg:w-[400px] w-[200px]"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={handleClick}>Search</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
