import { useExperienceData } from "../hooks/useExperienceData";
import { Card } from "../components/experienceCard";

export const Experiences = () =>{

const { data } =  useExperienceData();

return (
  <div className="my-5 flex flex-col items-center">
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold">Experiences</h1>
    </div>
    <div className="container w-80%">
      <div className="car-grid mt-5">
        {data?.map((experience) => (
          <Card
            key={experience.id}
            imageUrl={experience.imageUrl}
            title={experience.experienceName}
            specs={experience.experienceDescription}
          />
        ))}
      </div>
    </div>
  </div>
);
};
