
import modelLeft from "@/assets/model-left.png";
import modelsTop from "@/assets/model-top.png";
import modelRight from "@/assets/model-right.png";
import modelsBottom from "@/assets/model-bottom.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] px-20 py-8">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-[1fr_1.3fr_1fr] md:gap-6">
        {/* Left tall image */}
        <div className="overflow-hidden rounded-2xl bg-[#E0E0E0] flex items-end">
          <img
            src={modelLeft}
            alt="Man in casual fashion sitting on wooden box"
            className="h-[600px] w-full object-cover"
          />
        </div>

        {/* Center column */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Top group photo */}
          <div className="overflow-hidden rounded-2xl bg-[#E0E0E0] px-4 pt-2">
            <img
              src={modelsTop}
              alt="Group of women in professional fashion"
              className="h-full w-full object-contain"
              loading="lazy"
              width={800}
              height={512}
            />
          </div>

          {/* Text block */}
          <div className="flex flex-col items-center py-1 md:py-6">
            <h1 className="text-center text-5xl text-[#484848] font-medium uppercase tracking-tight text-foreground md:text-6xl lg:text-8xl">
              Ultimate
            </h1>
            <p
              className="text-center text-8xl font-bold uppercase tracking-tight text-transparent md:text-7xl lg:text-[180px]"
              style={{
                WebkitTextStroke: "1px hsl(var(--foreground))",
                color: "transparent",
              }}
            >
              Sale
            </p>
            <p className="mt-3 text-lg font-medium uppercase tracking-[0.3em] text-[#484848]">
              New Collection
            </p>
            <button className="mt-6 rounded-lg bg-[#000000] px-14 py-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Bottom group photo */}
          <div className="overflow-hidden rounded-2xl bg-card mt-auto">
            <img
              src={modelsBottom}
              alt="Two women laughing in sparkly dresses"
              className="h-full w-full object-cover"
              loading="lazy"
              width={800}
              height={512}
            />
          </div>
        </div>

        {/* Right tall image */}
        <div className="overflow-hidden rounded-2xl bg-[#E0E0E0] flex items-end">
          <img
            src={modelRight}
            alt="Man in orange turtleneck sitting on stool"
            className="h-[600px] w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
