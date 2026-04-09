import React, { useState } from "react";
import NewsImg1 from "@/assets/NewLetter/NewsLetter1st.png";
import NewsImg2 from "@/assets/NewLetter/NewsLetter2nd.png";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <section className="relative w-full min-h-[650px] bg-white flex items-center justify-center px-28 pb-16 overflow-hidden">

      {/* Left Model */}
      <div className="absolute left-16 bottom-8 flex items-end">
        <img
          src={NewsImg1}
          alt="Male model"
          className="h-[560px] w-auto object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-[44px] font-serif text-[#4A4A4A] mb-6">
          Subscribe To Our Newsletter
        </h1>

        <p className="text-[#6A6A6A] text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>

        <div className="flex flex-col items-center gap-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="michael@ymail.com"
            className="w-[420px] px-6 py-4 bg-white rounded-md shadow-2xl text-gray-600 placeholder-gray-400 focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            className="px-10 py-3 bg-black text-white text-sm rounded-md shadow-xl hover:bg-gray-900 transition"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Right Model */}
      <div className="absolute right-16 bottom-8 flex items-end">
        <img
          src={NewsImg2}
          alt="Female model"
          className="h-[560px] w-auto object-contain"
        />
      </div>

    </section>
  );
};

export default Newsletter;