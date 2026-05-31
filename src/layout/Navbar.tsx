import { Button } from "../components/Button";

const navLinks = [
  { href: "#cars", label: "Our Fleet" },
  { href: "#experiences", label: "Experiences" },
  { href: "#about", label: "About Us" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-foreground/8">
      <div className="backdrop-blur-md bg-background/85">
        <nav className="container mx-auto px-8 py-5 flex items-center justify-between">
          <a href="/" className="text-xl font-black tracking-tighter">
            GAIJIN <span className="text-primary">TUNED</span>
          </a>

          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-5 py-2 text-sm font-semibold text-foreground/60 hover:text-foreground tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm">Book Now</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
