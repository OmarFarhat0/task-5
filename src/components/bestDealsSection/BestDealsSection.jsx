import { useState } from "react";

import TitleAndDesc from "../titleAndDesc/TitleAndDesc";
import ImageCard from "../imageCard/ImageCard";

import "./bestDealsSection.css";

export default function BestDealsSection({ titleAndDescData, items }) {
  const firstOption = items[0].title;
  const [option, setOption] = useState(firstOption);

  const indexItem = items.findIndex((element) => {
    return element.title === option;
  });

  return (
    <section className="best-deals-section" id="best-deals-section">
      <TitleAndDesc data={titleAndDescData} />

      <div className="options">
        {items.map((element, index) => {
          return (
            <button key={index} onClick={() => setOption(element.title)}>
              {element.title}
            </button>
          );
        })}
      </div>

      <div className="cards-container">
        {items[indexItem].images.map((element, index) => {
          return <ImageCard key={index} data={element} />;
        })}
      </div>
    </section>
  );
}
