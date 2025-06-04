'use client';

import React, { useState } from 'react';
import { useCms } from "@/contexts/CmsContext";
import { FormAttributes } from "@/types/cms.types";

interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { sections } = useCms();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formSection = sections.find(section => section.type === 'form');

  if (!formSection) return null;

  const { fields, submission } = formSection.attributes as FormAttributes;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(e);
      setSubmitStatus('success');
      setFormData({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          method={submission.method}
          className="bg-gray-50 p-8 rounded-lg shadow-md"
        >
          {fields.map((field) => (
            <div key={field.name} className="mb-6">
              <label
                htmlFor={field.name}
                className="block text-gray-700 font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={4}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.styling.placeholder}
                  className={field.styling.className}
                  required={field.validation.required}
                  minLength={field.validation.minLength}
                  maxLength={field.validation.maxLength}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.styling.placeholder}
                  className={field.styling.className}
                  required={field.validation.required}
                  minLength={field.validation.minLength}
                  maxLength={field.validation.maxLength}
                  pattern={field.validation.pattern}
                />
              )}
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            {submission.successMessage}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {submission.errorMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;