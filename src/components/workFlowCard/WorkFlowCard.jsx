import "./workFlowCard.css";

export default function WorkFlowCard({ data }) {
  return (
    <div className={`work-flow-card ${data?.active ? "active" : ""}`}>
      {data.icon}
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
}
