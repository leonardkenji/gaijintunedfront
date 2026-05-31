export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url('src/assets/hero.png')` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 from-black/85 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-10 py-20 max-w-2xl">
        <p className="text-xs tracking-widest uppercase text-amber-400 mb-4">
          Japan's street legends
        </p>
        <h1 className="text-6xl font-bold text-white leading-tight mb-4">
          Drive the <span className="text-amber-400">dream.</span><br />
          Join the Club.
        </h1>
        <p className="text-white/60 text-lg mb-8 max-w-md">
          Hand-picked Japanese performance cars for enthusiasts who demand authenticity, power, and style.
        </p>
        <div className="flex gap-5">
          <a href="#cars"
            className="inline-block bg-amber-400 text-black text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-amber-300 transition-colors rounded-2xl">
            Browse our fleet
          </a>
          <a href="#cars"
            className="inline-block bg-primary text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-primary-foreground transition-colors rounded-2xl">
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};
