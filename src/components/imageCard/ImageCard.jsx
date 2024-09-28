import "./imageCard.css";

export default function ImageCard({ data }) {
  return (
    <div
      className="image-card"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      {data.words.map((element, index) => {
        return (
          <div key={index} className="word">
            <p>{element}</p>
          </div>
        );
      })}
    </div>
  );
}
