import Icon1 from "@/assets/ValueBar/FreeShipping.png"
import Icon2 from "@/assets/ValueBar/HighQuality.png"
import Icon3 from "@/assets/ValueBar/Warranty.png"
import Icon4 from "@/assets/ValueBar/Support.png"

const ValueBar = () => {
  const values = [
    {
      icon: Icon2,
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: Icon3,
      title: "Warrany Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: Icon1,
      title: "Free Shipping",
      subtitle: "Order over 150 $",
    },
    {
      icon: Icon4,
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-32 py-12">
        <div className="flex flex-wrap justify-between items-center gap-y-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 min-w-[200px]"
            >
              {/* Icon */}
              <div className="flex-shrink-0 text-[#484848]">
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-md font-semibold text-[#484848] leading-tight">
                  {item.title}
                </span>
                <span className="text-sm text-[#535353] leading-tight mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBar;
