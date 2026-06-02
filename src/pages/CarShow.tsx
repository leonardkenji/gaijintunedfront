import { useParams } from "react-router-dom";
import { useCarShow } from "../hooks/useCarShow";


export default function CarShow() {
  const { id } = useParams()
  const { data } = useCarShow(id!);

  if (!data) return <div>Loading...</div>

  return (
    <section id="carShow" className="min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="animate-slide-up mb-10">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            {data.carName}
          </h2>
        </div>

        {/* image */}
        <div className="animate-fade-in animation-delay-300 w-full overflow-hidden rounded-(--radius) border border-foreground/10">
          <img
            src={data.imageUrl}
            alt={data.carName}
            className="w-full h-[60vh] object-cover object-center"
          />
        </div>

        {/* description */}
        <div className="animate-slide-up mb-10">
          <div className="w-12 h-0.5 bg-primary mb-4" />
          <p className="mt-10 text-2xl">
            {data.carDescription}
          </p>
        </div>

      </div>
    </section>
  )
}
