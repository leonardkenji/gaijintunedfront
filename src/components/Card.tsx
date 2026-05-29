import "./card.css";

interface CardProps {
  title: string,
  specs:string
}

export function Card({ title, specs } : CardProps) {
  return(
    <div className="card">
      <img src="src/assets/gtr.jpg" alt="imagem fica por enquanto" />
      <h2>{title}</h2>
      <p>{specs}</p>
    </div>
  )
}
