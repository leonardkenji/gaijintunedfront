import logo from "../assets/image-removebg-preview.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('src/assets/hero.png')` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-transparent via-primary to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 w-full px-10 py-20 flex items-center justify-between">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.35em] uppercase text-secondary mb-6 font-semibold animate-fade-in">
            Japan's street legends
          </p>
          <h1 className="text-7xl font-black text-white leading-none mb-6 animate-fade-in animation-delay-150">
            Drive the{" "}
            <span className="text-primary-foreground">dream.</span>
            <br />
            Join the Club.
          </h1>
          <p className="text-foreground/55 text-lg mb-10 max-w-md leading-relaxed animate-fade-in animation-delay-300">
            Hand-picked Japanese performance cars for enthusiasts who demand
            authenticity, power, and style.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in animation-delay-300">
            <a
              href="#cars"
              className="inline-flex items-center bg-secondary text-muted-foreground text-xs font-black tracking-[0.2em] uppercase px-8 py-4 hover:bg-secondary/80 transition-colors rounded-sm"
            >
              Browse our fleet
            </a>
            <a
              href="#cars"
              className="inline-flex items-center bg-primary text-white text-xs font-black tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary/80 transition-colors rounded-sm"
            >
              Become a Member
            </a>
          </div>
        </div>

        {/* Logo right side */}
        <div className="hidden md:flex items-center justify-center pr-10">
          <img src={logo} alt="logo" className="h-64 w-auto opacity-90" />
        </div>
      </div>
    </section>
  );
};
