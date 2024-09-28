import "./titleAndDesc.css";

export default function TitleAndDesc({ data }) {
  return (
    <header className="title-and-desc">
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </header>
  );
}
