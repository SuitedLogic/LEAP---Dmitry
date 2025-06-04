import { useState, useEffect } from 'react';
import { CmsSection } from '@/types/cms.types';
import { cmsData } from '@/data/cms.data';

interface cmsContent {
  sections: CmsSection[];
  loading: boolean;
  error: Error | null;
}

export const useCmsContent = (): cmsContent => {
  const [sections, setSections] = useState<CmsSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setSections(cmsData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch content'));
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { sections, loading, error };
};