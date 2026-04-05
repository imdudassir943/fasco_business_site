import Calvin from "@/assets/brands/CalvinKlein.png";
import Channel from "@/assets/brands/Channel.png";
import Denim from "@/assets/brands/Denim.png";
import Louis from "@/assets/brands/LouisVuiton.png";
import Prada from "@/assets/brands/Prada.png";

const brands = [
  { name: "Chanel", logo: Channel },
  { name: "Louis Vuitton", logo: Louis },
  { name: "Prada", logo: Prada },
  { name: "Calvin Klein", logo: Calvin },
  { name: "Denim", logo: Denim },
];

const BrandLogos = () => {
  return (
    <section className="w-full bg-white py-10 md:py-14 overflow-hidden">

  <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative">

    {/* LEFT FADE */}
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

    {/* RIGHT FADE */}
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

    {/* Marquee Wrapper */}
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">

        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className="h-8 object-contain opacity-80"
          />
        ))}

        {brands.map((brand) => (
          <img
            key={brand.name + "-duplicate"}
            src={brand.logo}
            alt={brand.name}
            className="h-8 object-contain opacity-80"
          />
        ))}

      </div>
    </div>

  </div>

</section>
  );
};

export default BrandLogos;