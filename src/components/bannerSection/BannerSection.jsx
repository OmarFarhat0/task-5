import "./bannerSection.css";

export default function BannerSection({ srcBackImg, title, text }) {
  return (
    <section
      className="banner-section my-container"
      id="banner-section"
      style={{ backgroundImage: `url(${srcBackImg})` }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
