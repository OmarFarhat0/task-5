import "./propertyCard.css";

import locationWhSvg from "../../assets/icons/locationWh.svg";

export default function PropertyCard({ data }) {
  return (
    <div className="property-card">
      <img src={data.srcImg} alt="Property Image" className="property-img" />
      <p className="price-card">{data.price}</p>
      <h3 className="title-card">{data.title}</h3>
      <div className="where-container">
        <img src={locationWhSvg} alt="Location Icon" />
        <p>{data.location}</p>
      </div>
    </div>
  );
}
