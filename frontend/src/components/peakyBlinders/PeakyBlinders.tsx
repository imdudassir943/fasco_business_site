import peakyMenImage from "@/assets/PeakyMen.png";

const PeakyBlinders = () => {
  return (
    /* Increased height to h-[450px] as requested */
    <section className="relative w-full h-[450px] bg-[#DADADA] overflow-hidden px-4 lg:px-20">
      
      {/* Desktop Layout - Background Divider */}
      <div className="hidden lg:block absolute inset-0">
        <div
          className="absolute top-0 left-0 h-full w-full bg-black"
          style={{
            clipPath: 'polygon(0 0, calc(55% + 2px) 0, calc(42% + 2px) 100%, 0% 100%)'
          }}
        />
        <div
          className="absolute top-0 left-0 h-full w-full bg-[#F8F8F8]"
          style={{
            clipPath: 'polygon(0 0, 55% 0, 42% 100%, 0% 100%)'
          }}
        />
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden absolute inset-0">
        <div
          className="absolute top-0 left-0 h-full w-full bg-black"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(55% + 2px), 0 calc(65% + 2px))'
          }}
        />
        <div
          className="absolute top-0 left-0 h-full w-full bg-[#F8F8F8]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 65%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Side - Image Container */}
        <div className="relative flex items-center justify-center h-full lg:-translate-x-12 transition-transform duration-300">
          <div className="relative h-full max-w-full flex justify-center">
            <div className="relative h-full inline-block max-w-full">
              <img 
                src={peakyMenImage} 
                alt="Peaky Blinders Model"
                className="h-full w-auto max-w-full object-contain block"
              />
              
              {/* Annotation Callouts */}
              <div className="absolute top-[8%] right-[15%] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                <div className="w-24 h-[1px] bg-black"></div>
                <div className="bg-white border border-black px-4 py-2 text-xs font-medium whitespace-nowrap">
                  Flat Cap
                </div>
              </div>

              <div className="absolute top-[22%] left-[8%] flex items-center gap-2">
                <div className="bg-white border border-black px-4 py-2 text-xs font-medium whitespace-nowrap">
                  Suspender
                </div>
                <div className="w-[60px] h-[1px] bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
              </div>

              <div className="absolute top-[38%] right-[8%] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                <div className="w-48 h-[1px] bg-black"></div>
                <div className="bg-white border border-black px-4 py-2 text-xs font-medium whitespace-nowrap">
                  Hugo Boss
                </div>
              </div>

              <div className="absolute top-[52%] left-[5%] flex items-center gap-2">
                <div className="bg-white border border-black px-4 py-2 text-xs font-medium whitespace-nowrap">
                  Hugo Boss
                </div>
                <div className="w-20 h-[1px] bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
              </div>

              <div className="absolute bottom-[8%] right-[12%] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                <div className="w-40 h-[1px] bg-black"></div>
                <div className="bg-white border border-black px-4 py-2 text-xs font-medium whitespace-nowrap">
                  Santoni
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="relative flex flex-col justify-center px-8 lg:px-16 py-8">
          <div className="max-w-[500px]">
            <p className="text-sm text-gray-500 mb-2 tracking-wide">
              Women Collection
            </p>

            <h1 className="text-4xl lg:text-5xl font-serif text-[#484848] mb-4 leading-tight">
              Peaky Blinders
            </h1>

            <div className="mb-3">
              <h2 className="text-xs font-bold text-[#484848] tracking-[0.2em] border-b-2 border-black pb-1 inline-block">
                DESCRIPTION
              </h2>
            </div>

            <p className="text-xs text-[#484848] leading-relaxed mb-6 max-w-[450px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-[#484848]">Size:</span>
              <button className="bg-black text-white w-10 h-10 rounded-md flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors">
                M
              </button>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-semibold text-[#000000]">
                $100.00
              </p>
            </div>

            <button className="bg-black text-white px-10 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PeakyBlinders;