import { useExperienceData } from "../hooks/useExperienceData";
import { Card } from "../components/experienceCard";
import { Link } from "react-router-dom";

export const Experiences = () => {
  const { data } = useExperienceData();

  return (
    <section id="experiences" className="py-24 bg-muted/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-baseline gap-5 mb-16">
          <span className="text-secondary font-black text-sm tracking-widest select-none">02</span>
          <div className="w-12 h-px bg-foreground/20 self-center" />
          <h2 className="text-5xl font-black tracking-tight">Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((experience) => (
            <Link key={experience.id} to={`/experience/${experience.id}`}>
            <Card
              key={experience.id}
              imageUrl={experience.imageUrl}
              title={experience.experienceName}
              specs={experience.experienceDescription}
            />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
