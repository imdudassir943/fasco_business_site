import React from 'react';
import SocialMedia1 from "@/assets/FollowPage/FollowPage1st.png"
import SocialMedia2 from "@/assets/FollowPage/FollowPage2nd.png"
import SocialMedia3 from "@/assets/FollowPage/FollowPage3rd.png"
import SocialMedia4 from "@/assets/FollowPage/FollowPage4th.png"
import SocialMedia5 from "@/assets/FollowPage/FollowPage5th.png"
import SocialMedia6 from "@/assets/FollowPage/FollowPage6th.png"
import SocialMedia7 from "@/assets/FollowPage/FollowPage7th.png"

const SocialGallery: React.FC = () => {
  const images = [
    {
      id: 1,
      src: SocialMedia1,
      alt: 'Fashion model 1'
    },
    {
      id: 2,
      src: SocialMedia2,
      alt: 'Fashion model 2'
    },
    {
      id: 3,
      src: SocialMedia3,
      alt: 'Fashion model 3'
    },
    {
      id: 4,
      src: SocialMedia4,
      alt: 'Fashion model 4'
    },
    {
      id: 5,
      src: SocialMedia5,
      alt: 'Fashion model 5'
    },
    {
      id: 6,
      src: SocialMedia6,
      alt: 'Fashion model 6'
    },
    {
      id: 7,
      src: SocialMedia7,
      alt: 'Fashion model 7'
    }
  ];

  return (
    <div 
      className="w-full py-16"
      style={{
        background: 'linear-gradient(to bottom, #F9F9F9 0%, #FFFFFF 20px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#484848] mb-4">
            Follow Us On Instagram
          </h2>
          <p className="text-[#484848] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
        </div>
      </div>

      {/* Image Gallery - Full width 7 columns */}
      <div className="w-full mt-12 mb-8">
        <div className="grid grid-cols-7 gap-0 items-center overflow-hidden">
          {images.map((image, index) => {
            // 0, 2, 4, 6 are 1st, 3rd, 5th, 7th (Centered and shorter)
            // 1, 3, 5 are 2nd, 4th, 6th (Longer)
            const isLong = index % 2 !== 0;

            return (
              <div
                key={image.id}
                className={`relative w-full overflow-hidden ${
                  isLong
                    ? "aspect-[2/3]" // Taller
                    : "aspect-[3/4]" // Shorter
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialGallery;