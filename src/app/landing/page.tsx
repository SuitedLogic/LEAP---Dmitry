'use client';

import { useSubmitForm } from "@/hooks/submitForm.hook";
import { CmsProvider, useCms } from "@/contexts/CmsContext";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

const LandingContent: React.FC = () => {
  const { submitForm } = useSubmitForm();
  const { loading, error } = useCms();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm({});
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Hero />
      <Features />
      <ContactForm onSubmit={handleFormSubmit} />
      <Footer />
    </>
  );
};

const Landing: React.FC = () => {
  return (
    <CmsProvider>
      <LandingContent />
    </CmsProvider>
  );
};

export default Landing;
