'use client';

import { useCms } from "@/contexts/CmsContext";
import { FooterAttributes } from "@/types/cms.types";
import { DynamicIcon } from "@/components/icons/DynamicIcon";

const Footer: React.FC = () => {
  const { sections } = useCms();
  const footerSection = sections.find(section => section.type === 'footer');

  if (!footerSection) return null;

  const { copyright, socialLinks } = footerSection.attributes as FooterAttributes;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {copyright.year} {copyright.text}</p>
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <span className="sr-only">{link.platform}</span>
              {link.icon ? (
                <DynamicIcon
                  name={link.icon}
                  size={24}
                  className="hover:scale-110 transition-transform"
                />
              ) : (
                <span className="capitalize">{link.platform}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;