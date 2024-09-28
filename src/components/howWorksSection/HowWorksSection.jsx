import "./howWorksSection.css";

import TitleAndDesc from "../titleAndDesc/TitleAndDesc";
import WorkFlowCard from "../workFlowCard/WorkFlowCard";

export default function HowWorksSection({
  titleAndDescData,
  workFlowCardData,
}) {
  return (
    <section className="how-works-section my-container" id="how-works-section">
      <TitleAndDesc data={titleAndDescData} />
      <div className="cards-container">
        {workFlowCardData.map((elment, index) => {
          return <WorkFlowCard key={index} data={elment} />;
        })}
      </div>
    </section>
  );
}
