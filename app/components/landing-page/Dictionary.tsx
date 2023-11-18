'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useDarModeStore from 'app/store/useDarkModeStore';
import useWordStore from 'app/store/useWordStore';
import supabase from 'app/supabase/supabase';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Dictionary = () => {
  const [search, setSearch] = useState('');
  const { word, setWord } = useWordStore();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isNull, setIsNull] = useState(false);
  const { isDarkMode } = useDarModeStore();
  const getWord = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    search: string
  ) => {
    event.preventDefault();
    setLoading(true);
    const { data, error } = await supabase
      .from('words')
      .select()
      .eq('word', search.toUpperCase())
      .maybeSingle();
    setWord(data);
    if (data === null) {
      setIsNull(true);
    }
    setLoading(false);
  };

  return (
    <div className='relative z-50 flex gap-5 w-full'>
      <Input placeholder="Search any Idiom" />
      <Button type="submit">Search</Button>
    </div>
  );
};

export default Dictionary;
