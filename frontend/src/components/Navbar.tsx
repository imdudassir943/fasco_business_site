import { Button } from "@/components/ui/button";

const navLinks = ["Home", "Deals", "New Arrivals", "Packages", "Sign in"];

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-5">
        <a href="/" className="text-3xl font-bold text-[#484848] tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>
          FASCO
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <Button className="rounded-md px-7 py-2 text-sm shadow-xl">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
