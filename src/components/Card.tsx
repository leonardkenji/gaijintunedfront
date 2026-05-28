import "./card.css";

interface CardProps {
  title: string,
  specs:string
}

export function Card({ title, specs } : CardProps) {
  return(
    <div className="card">
      <h2>{title}</h2>
      <p>{specs}</p>
    </div>
  )
}
