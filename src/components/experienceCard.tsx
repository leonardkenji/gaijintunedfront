import "./card.css";

interface CardProps {
  title: string,
  specs:string,
  imageUrl: string
}

export function Card({ title, specs, imageUrl } : CardProps) {
  return(
    <div className="card">
      <img src={imageUrl}/>
      <h2>{title}</h2>
      <p>{specs}</p>
    </div>
  )
}
