import { useCarData } from "../hooks/useCarData";
import { Card } from "../components/Card";

export const Cars = () =>{

const { data } =  useCarData();

return (
  <div className="my-4 flex flex-col items-center">
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold">Car List</h1>
    </div>

    <div className="car-grid">
      {data?.map((car) => (
        <Card
          key={car.id}
          title={car.carName}
          specs={car.carSpecs}
        />
      ))}
    </div>
  </div>
);
};
