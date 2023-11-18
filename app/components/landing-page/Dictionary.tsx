'use client';

import useDarModeStore from 'app/store/useDarkModeStore';
import useWordStore from 'app/store/useWordStore';
import supabase from 'app/supabase/supabase';
import { cn } from 'app/utils/cn';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Dictionary = () => {
  const [search, setSearch] = useState('');
  const { word, setWord } = useWordStore();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isNull, setIsNull] = useState(false);
  const {isDarkMode} = useDarModeStore();
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
    <div className={cn("hero min-h-screen",  isDarkMode ? '': "bg-[url('/images/bg.svg')]")}>
      <div className="hero-content text-center">
        <div className="h-96 md:w-160 ">
          <form action="" className="w-full md:flex justify-between">
            <input
              required
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsNull(false);
              }}
              placeholder="Start typing any idiom"
              className="input input-bordered w-full  dark:text-black"
            />
            <button
              disabled={search ? false : true}
              onClick={(e) => getWord(e, search)}
              className="btn bg-blue-600 text-white hover:bg-blue-500 dark:disabled:bg-blue-200 dark:disabled:text-gray-500 dark:hover:bg-blue-900 dark:bg-blue-800 md:ml-2 my-4 md:my-0"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                'Search'
              )}
            </button>
          </form>
          {word ? (
            <div className="card w-full shadow-xl dark:bg-gray-800 mt-4">
              <div className="card-body">
                <p className="underline underline-offset-8">{word.word}</p>
                <div className="text-left">
                  <p className="mb-4">
                    {t('definition')}:{' '}
                    {i18n.language === 'en'
                      ? word.definition_en
                      : word.definition_id}
                  </p>
                  <p>
                    {t('example')}:{' '}
                    {i18n.language === 'en' ? word.example_en : word.example_id}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {isNull ? (
                <p className="mt-2">Kata yang Anda Cari tidak Ditemukan!</p>
              ) : (
                ''
              )}
              <h1 className="text-4xl font-bold my-8">{t('header.title')}</h1>
              <div className="w-full  h-40">
              {t('header.description')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
