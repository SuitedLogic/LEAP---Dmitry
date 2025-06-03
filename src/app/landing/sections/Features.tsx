'use client';

import FeatureCard from "../components/FeatureCard";
import { useCms } from "@/contexts/CmsContext";
import { GridAttributes } from "@/types/cms.types";
import { colorMap } from "../components/FeatureCard";

const Features: React.FC = () => {
  const { sections } = useCms();
  const featuresSection = sections.find(section => section.type === 'grid');

  if (!featuresSection) return null;

  const { layout, items } = featuresSection.attributes as GridAttributes;

  return (
    <section 
      id="feature-grid" 
      className="py-16 px-4 md:px-10 bg-gray-50"
      style={{ padding: layout.padding }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div 
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${layout.columns}, minmax(0, 1fr))`,
            gap: layout.gap,
          }}
        >
          {items.map((item) => (
            <FeatureCard
              key={item.id} 
              id={item.id}
              title={item.content.title}
              description={item.content.description}
              iconName={item.content.icon}
              iconColor={item.content.iconColor as keyof typeof colorMap}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;