import React from "react";
import ReactDOM from "react-dom/client";

// react element
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
      width="120"
    />
  </a>
);

// functional component
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Search</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const data = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54112",
      name: "The Wafflemeister",
      uuid: "57b3bbe5-d08b-4f38-b93b-29a5fdca741e",
      city: "5",
      area: "Mira Road",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "afgadznfb21uitkemwyu",
      cuisines: ["Desserts", "Beverages", "Sweets"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 5.900000095367432,
      slugs: {
        restaurant: "the-waffle-house-king-mira-road-mira-road",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop 26, Poonam Cluster, Phase 3, Srishti Complex, Mira Road, Mumbai",
      locality: "Mira Road",
      parentId: 11399,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6000,
        message: "",
        title: "Delivery Charge",
        amount: "6000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6898125~p=1~eid=00000188-9193-240c-03d1-bc3a0054014a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.9 kms",
      hasSurge: false,
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
        exclusiveOfferMessage: "",
      },
      sla: {
        restaurantId: "54112",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 5.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "34557",
      name: "Veg Saagar Restaurant (Pure Veg) ",
      uuid: "a84bf209-f5ed-492f-bd52-aa5a96faa910",
      city: "5",
      area: "Bhayandar West",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "nvw5zx2fmlgqyhknz4jv",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Biryani",
        "Fast Food",
        "Continental",
        "Mexican",
        "Pizzas",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: "veg-saagar-bhayandar-bhayandar",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "150, Feet Road, Near Flyover, Bhayandar West, Bhayandar, Mumbai",
      locality: "Near Flyover",
      parentId: 222200,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3500,
        message: "",
        title: "Delivery Charge",
        amount: "3500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
        exclusiveOfferMessage: "",
      },
      sla: {
        restaurantId: "34557",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({ restaurant }) => {
  const { uuid, cloudinaryImageId, name, cuisines, avgRating } =
    restaurant.data;

  const imgpreUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  return (
    <div>
      {
        <div key={uuid} className="card">
          <img src={`${imgpreUrl}${cloudinaryImageId}`} />
          <h2>{name}</h2>

          <span key={restaurant.id}>{cuisines.join(", ")}</span>

          <h4>{avgRating} stars</h4>
        </div>
      }
    </div>
  );
};

const Body = () => {
  return (
    <div className="cardContainer">
      {data.map(
        (restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        )
        // RestaurantCard({ restaurant })
      )}
    </div>
  );
};

const TimePass = () => {
  // for loop in JSX react
  const items = ["Html", "C#", "Css"];
  const elements = [];
  for (const [index, value] of items.entries()) {
    elements.push(<li key="{index}">{value}</li>);
  }
  return <div>{elements}</div>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
