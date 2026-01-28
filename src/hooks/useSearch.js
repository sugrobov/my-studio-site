import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { buildSearchIndex, searchInIndex } from '../data/searchIndex';

// Хук для поиска
export const useSearch = () => {
  const { t, i18n } = useTranslation();
  
  const searchIndex = useMemo(() => {
    return buildSearchIndex(t, i18n);
  }, [t, i18n.language]);

  const search = (query, options = {}) => {
    return searchInIndex(searchIndex, query, options);
  };

  return {
    search,
    searchIndex
  };
};