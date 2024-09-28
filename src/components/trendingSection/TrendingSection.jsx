import PropertyCard from "../propertyCard/PropertyCard";
import TitleAndDesc from "../titleAndDesc/TitleAndDesc";

import "./trendingSection.css";

export default function TrendingSection({
  titleAndDescData,
  PropertyCardData,
}) {
  return (
    <section className="trending-section my-container">
      <TitleAndDesc data={titleAndDescData} />
      <div className="cards-container">
        {PropertyCardData.map((elment, index) => {
          return <PropertyCard key={index} data={elment} />;
        })}
      </div>
    </section>
  );
}
