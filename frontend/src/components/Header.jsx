import { react } from "react";
import "../style/Header.css";
export const Header = () => {
  const home_cat = [
    "Shop ",
    "Skin Concern ",
    "Ingredrient ",
    "Best-Seller ",
    "Kits ",
    "The Skin Quiz ",
    "Serums $45 Under ",
    "Trail Kit Under $50 ",
    "Minis ",
    "The Dewy Duo ",
    "About us ",
  ];
  return (
    <div className="containerHead">
      <div className="tagHead1">{/* mini Slider */}</div>
      <div className="tagHead2">
        {/* Logo and Sign up & cart icon */}
        {home_cat.map((elem) => {
          return <div className="catBar">{elem}</div>;
        })}
      </div>
      <div className="tagHead3">{/* Slider */}</div>
    </div>
  );
};
