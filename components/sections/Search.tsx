"use client";

import { useLocationContext } from "@/context/ContextProvider";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getWeatherByLocationService } from "@/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const SearchPage = () => {
  const { searchHistoric, setSearchHistoric, search, setSearch, setWeather, errorMsg, setErrorMsg } = useLocationContext();

  const handleSearch = async (saved?: string) => {
    const term = saved?.toLowerCase() || search.toLowerCase();
    try {
      const weather = await getWeatherByLocationService(term);
      if (searchHistoric?.indexOf(weather.name) === -1) {
        setSearchHistoric([...(searchHistoric || []), weather.name])
      }
      setWeather(weather);
      setErrorMsg(null);
    } catch (error) {
      setWeather(null);
      setErrorMsg("Invalid country or city");
    }
  };

  const handleRemove = async (item: string) => {
    const index = searchHistoric?.indexOf(item);
    if (index !== undefined && index > -1) {
      searchHistoric?.splice(index, 1);
      searchHistoric && setSearchHistoric([...searchHistoric])
    }
  }

  return (
    <div className="flex flex-col max-w-96">
      <div className="flex flex-col gap-y-1 mb-5">
        <div className="flex gap-x-3">
          <Input
            type="text"
            placeholder="Search Location..."
            className="sm:w-[150px] lg:w-[400px] w-[200px]"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
        <div className="text-sm text-red-500">{errorMsg}</div>
      </div> 
      <div className="flex flex-col gap-y-3">
        {searchHistoric?.map((item, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <div>{item}</div>
              <div className="flex gap-x-5">
                <FontAwesomeIcon 
                  className="cursor-pointer" 
                  icon={faMagnifyingGlass} 
                  onClick={() => handleSearch(item)} 
                />
                <FontAwesomeIcon 
                  className="cursor-pointer" 
                  icon={faTrashCan} 
                  onClick={() => handleRemove(item)} 
                />
              </div>
            </div>
          )
          
        })}
      </div>
    </div>
  )
}

export default SearchPage;