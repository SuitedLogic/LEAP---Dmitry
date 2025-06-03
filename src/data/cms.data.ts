import { CmsSection } from "@/types/cms.types";

export const cmsData: CmsSection[] = [
  {
    id: "hero-section",
    type: "hero",
    attributes: {
      background: {
        type: "image",
        src: "/images/hero-bg.jpg",
        overlay: {
          color: "rgba(0,0,0,0.5)",
          enabled: true,
        },
      },
      content: {
        title: {
          text: "Welcome to Our Platform",
          style: {
            fontSize: "48px",
            color: "#ffffff",
            fontWeight: "bold",
          },
        },
        subtitle: {
          text: "Discover Amazing Features",
          style: {
            fontSize: "24px",
            color: "#f0f0f0",
          },
        },
        cta: {
          text: "Get Started",
          url: "#features",
          style: {
            backgroundColor: "#2563eb",
            color: "#ffffff",
          },
        },
      },
    },
  },
  {
    id: "feature-grid",
    type: "grid",
    attributes: {
      layout: {
        columns: 3,
        gap: "20px",
        padding: "40px",
      },
      items: [
        {
          id: "feature-1",
          content: {
            title: "Fast Performance",
            description: "Lightning quick loading times",
            alignment: "center",
            icon: "LightningBolt",
            iconColor: "blue",
          },
        },
        {
          id: "feature-2",
          content: {
            title: "Secure Platform",
            description: "Enterprise-grade security",
            alignment: "center",
            icon: "LockClosed",
            iconColor: "green",
          },
        },
        {
          id: "feature-3",
          content: {
            title: "Scalable Solution",
            description: "Grows with your business needs",
            alignment: "center",
            icon: "TrendingUp",
            iconColor: "purple",
          },
        },
      ],
    },
  },
  {
    id: "contact-form",
    type: "form",
    attributes: {
      fields: [
        {
          type: "text",
          name: "fullName",
          label: "Full Name",
          validation: {
            required: true,
            minLength: 2,
            maxLength: 50,
          },
          styling: {
            className: "form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Enter your full name",
          },
        },
        {
          type: "email",
          name: "email",
          label: "Email Address",
          validation: {
            required: true,
            pattern: "^[^@]+@[^@]+\\.[^@]+$",
          },
          styling: {
            className: "form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "your@email.com",
          },
        },
        {
          type: "textarea",
          name: "message",
          label: "Message",
          validation: {
            required: true,
            minLength: 10,
            maxLength: 1000,
          },
          styling: {
            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "How can we help you?",
          },
        },
      ],
      submission: {
        endpoint: "/api/contact",
        method: "POST",
        successMessage: "Thank you for contacting us!",
        errorMessage: "Something went wrong. Please try again.",
      },
    },
  },
  {
    id: "footer",
    type: "footer",
    attributes: {
      copyright: {
        text: "Mayhem. All rights reserved.",
        year: 2025,
      },
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: "Facebook",
        },
        {
          platform: "twitter",
          url: "#",
          icon: "Twitter",
        },
        {
          platform: "linkedin",
          url: "#",
          icon: "LinkedIn",
        },
      ],
    },
  },
];
