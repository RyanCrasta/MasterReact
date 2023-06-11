import { useEffect, useState } from "react";
import { data } from "../../config";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      setRestaurantData(data);
    }
  }, [searchValue]);

  const searchAction = (e) => {
    e.preventDefault();
    let searchedValue = [];

    if (searchValue === "") {
      setRestaurantData(data);
      return;
    }

    restaurantData.map((obj) => {
      if (obj.data.name.toLowerCase().includes(searchValue.toLowerCase())) {
        searchedValue.push(obj);
      }
    });

    setRestaurantData(searchedValue);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={searchAction}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchValue}
            onChange={changeHandler}
          />
        </form>
      </div>

      <div className="cardContainer">
        {restaurantData.length > 0 ? (
          restaurantData.map(
            (restaurant) => <RestaurantCard restaurant={restaurant} />
            // RestaurantCard({ restaurant })
          )
        ) : (
          <p>No data found</p>
        )}
      </div>
    </>
  );
};

export default Body;
