import { Link } from "react-router-dom";
import { useCarData } from "../hooks/useCarData";
import { Card } from "../components/carCard";

export const Cars = () => {
  const { data } = useCarData();

  return (
    <section id="cars" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-baseline gap-5 mb-16">
          <span className="text-secondary font-black text-sm tracking-widest select-none">01</span>
          <div className="w-12 h-px bg-foreground/20 self-center" />
          <h2 className="text-5xl font-black tracking-tight">Our Fleet</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((car) => (
            <Link key={car.id} to={`/car/${car.id}`}>
              <Card
                carImg={car.imageUrl}
                title={car.carName}
                specs={car.carDescription}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
