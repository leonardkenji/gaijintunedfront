import "./card.css";

interface CardProps {
  title: string,
  specs:string,
  carImg: string
}

export function Card({ title, specs, carImg } : CardProps) {
  return(
    <div className="card">
      <img src={carImg} />
      <h2>{title}</h2>
      <p>{specs}</p>
    </div>
  )
}
