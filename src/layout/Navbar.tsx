import { Button } from "../components/Button";

const navLinks = [{href:"/", label:"Our Fleet"},{href:"/", label:"Experiences"},{href:"/", label:"About Us"}]

export const Navbar = () => {
  return(
    <header className="fixed top-0 left-0 w-full py-8 z-50">
    {/*Desktop Navbar*/}
    <nav className="container mx-auto px-8 flex items-center justify-between">
      <a href="/" className="text-xl font-bold"> GAIJIN TUNNED</a>

    <div className="hidden md:flex items-center gap-1">
      <div className="px-2 py-1 flex items-center gap-1">
        {navLinks.map((link, index) => (
          <a href={link.href} key={index} className="px-4 font-bold text-md hover:text-primary">
            {link.label}
          </a>
        ))}
      </div>
    </div>

    {/* CTA Button  */}
    <div className="hidden md:block">
      <Button size="sm" className="cursor-pointer">
        Book Now
      </Button>
    </div>
    </nav>
  </header>
  )
}
