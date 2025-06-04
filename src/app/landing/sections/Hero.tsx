'use client';

// import Image from "next/image";
import { useCms } from "@/contexts/CmsContext";
import { HeroAttributes } from "@/types/cms.types";

const Hero: React.FC = () => {
  const { sections } = useCms();
  const heroSection = sections.find(section => section.type === 'hero');

  if (!heroSection) return null;

  const { background, content } = heroSection.attributes as HeroAttributes;

  return (
    <section
      id="hero-section"
      className="relative py-20 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        {/* <Image
          src={background.src}
          alt="Hero Background"
          className="w-full h-full object-cover"
        /> */}
        {background.overlay.enabled && (
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: background.overlay.color }}
          />
        )}
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 
          className="mb-4"
          style={content.title.style}
        >
          {content.title.text}
        </h1>
        <p style={content.subtitle.style}>
          {content.subtitle.text}
        </p>
        {content.cta && (
          <button
            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
          >
            {content.cta.text}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;