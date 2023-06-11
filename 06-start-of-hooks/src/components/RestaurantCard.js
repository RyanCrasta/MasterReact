import { IMG_CDN } from "../../config";

const RestaurantCard = ({ restaurant }) => {
  const { uuid, cloudinaryImageId, name, cuisines, avgRating } =
    restaurant.data;

  const imgpreUrl = IMG_CDN;

  return (
    <div key={uuid} className="card">
      <img src={`${imgpreUrl}${cloudinaryImageId}`} />
      <h2>{name}</h2>

      <span key={restaurant.id}>{cuisines.join(", ")}</span>

      <h4>{avgRating} stars</h4>
    </div>
  );
};

export { RestaurantCard };
