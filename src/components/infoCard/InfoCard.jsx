import "./infoCard.css";

export default function HeroCard({ data }) {
  return (
    <div className="hero-card">
      <div className="svg-container">{data.icon}</div>
      <div className="details">
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
}
