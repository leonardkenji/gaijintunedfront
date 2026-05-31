const stats = [
  { value: "500+", label: "Happy Members" },
  { value: "50+", label: "JDM Cars" },
  { value: "30+", label: "Experiences" },
  { value: "5★", label: "Avg Rating" },
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-baseline gap-5 mb-10">
              <span className="text-secondary font-black text-sm tracking-widest select-none">03</span>
              <div className="w-12 h-px bg-foreground/20 self-center" />
            </div>
            <h2 className="text-6xl font-black tracking-tight leading-none mb-8">
              About<br />
              <span className="text-primary">Gaijin</span> Tuned.
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-md">
              GaijinTuned connects car enthusiasts from around the world to the
              heart of Japan's automotive culture. From legendary JDM icons and
              underground car meets to unforgettable night drives, we create
              authentic experiences that bring you closer to the cars, people,
              and energy that make Japan a dream destination for automotive fans.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-muted/20 border border-foreground/10 p-8 rounded-lg hover:border-primary/30 transition-colors duration-300"
              >
                <p className="text-5xl font-black text-primary mb-3">{stat.value}</p>
                <p className="text-foreground/50 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
