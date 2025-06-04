import { IconName } from "@/components/icons/registry";
import { IconColor } from "@/app/landing/components/FeatureCard";

export interface CmsSection {
  id: string;
  type: 'hero' | 'grid' | 'form' | 'footer';
  attributes: HeroAttributes | GridAttributes | FormAttributes | FooterAttributes;
}

export interface HeroAttributes {
  background: {
    type: 'image';
    src: string;
    overlay: {
      color: string;
      enabled: boolean;
    };
  };
  content: {
    title: {
      text: string;
      style: {
        fontSize: string;
        color: string;
        fontWeight: string;
      };
    };
    subtitle: {
      text: string;
      style: {
        fontSize: string;
        color: string;
      };
    };
    cta?: {
      text: string;
      url: string;
      style: {
        backgroundColor: string;
        color: string;
      };
    };
  };
}

export interface GridAttributes {
  layout: {
    columns: number;
    gap: string;
    padding: string;
  };
  items: Array<{
    id: string;
    content: {
      title: string;
      description: string;
      alignment: 'left' | 'center' | 'right';
      icon: IconName;
      iconColor: IconColor;
    };
  }>;
}

export interface FormAttributes {
  fields: Array<{
    type: 'text' | 'email' | 'textarea';
    name: string;
    label: string;
    validation: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
      pattern?: string;
    };
    styling: {
      className: string;
      placeholder: string;
    };
  }>;
  submission: {
    endpoint: string;
    method: 'POST';
    successMessage: string;
    errorMessage: string;
  };
}

export interface FooterAttributes {
  copyright: {
    text: string;
    year: number;
  };
  socialLinks: Array<{
    platform: 'facebook' | 'twitter' | 'linkedin';
    url: string;
    icon: IconName;
  }>;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: IconName;
}