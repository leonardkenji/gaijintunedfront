interface CardProps {
  title: string;
  specs: string;
  carImg: string;
}

export function Card({ title, specs, carImg }: CardProps) {
  return (
    <div className="group bg-muted/20 border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={carImg}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 border-t border-foreground/5">
        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">
          {title}
        </h3>
        <p className="text-foreground/50 text-sm leading-relaxed line-clamp-3">{specs}</p>
      </div>
    </div>
  );
}
