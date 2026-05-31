import { useCarData } from "../hooks/useCarData";
import { Card } from "../components/carCard";

export const Cars = () =>{

const { data } =  useCarData();

return (
  <div className="my-4 flex flex-col items-center">
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold">Car List</h1>
    </div>
    <div className="container w-80%">
      <div className="car-grid mt-5">
        {data?.map((car) => (
          <Card
            key={car.id}
            carImg={car.imageUrl}
            title={car.carName}
            specs={car.carDescription}
          />
        ))}
      </div>
    </div>
  </div>
);
};
