import React, { createContext, useContext, ReactNode } from 'react';
import { useCmsContent } from '@/hooks/useCmsContent.hook';
import { CmsSection } from '@/types/cms.types';

interface CmsContextType {
  sections: CmsSection[];
  loading: boolean;
  error: Error | null;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { sections, loading, error } = useCmsContent();

  return (
    <CmsContext.Provider value={{ sections, loading, error }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (context === undefined) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};