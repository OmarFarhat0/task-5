import InfoCard from "../infoCard/infoCard";
import "./heroSection.css";

export default function HeroSection({ heroData, heroCardData }) {
  return (
    <section className="hero-section" id="hero-section">
      <div
        className="image"
        style={{ backgroundImage: `url(${heroData.srcImg})` }}
      >
        <div className="content">
          <h2 className="title">{heroData.title}</h2>
          <p className="text">{heroData.text}</p>
        </div>

        <div className="cards-container">
          {heroCardData.map((element, index) => {
            return <InfoCard key={index} data={element} />;
          })}
        </div>
      </div>
    </section>
  );
}
