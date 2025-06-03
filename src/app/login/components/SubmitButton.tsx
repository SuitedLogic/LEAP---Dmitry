import React from 'react';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
  submittingText: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  text,
  submittingText,
}) => {
  return (
    <button
      type="submit"
      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
        isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <DynamicIcon name="LoadingSpinner" size={24} className="animate-spin -ml-1 mr-3 text-white" />
          {submittingText}
        </>
      ) : (
        text
      )}
    </button>
  );
};