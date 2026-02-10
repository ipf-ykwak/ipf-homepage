import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet-async';

import favicon from '../assets/images/favicon.ico';
import favicon_16 from '../assets/images/favicon-16x16.png';
import favicon_32 from '../assets/images/favicon-32x32.png';
import favicon_apple from '../assets/images/favicon-apple.png';

interface propsType {
  pageLink?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const HelmetComponent = ({
  pageLink = '/',
  pageTitle = 'Home',
  pageDescription = 'Reform Education.',
}: propsType) => {
  const { language } = useI18next();
  return (
    <Helmet
      htmlAttributes={{
        language,
        lang: language,
      }}
    >
      <title>{pageTitle} | iPortfolio</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={`${pageTitle} | iPortfolio`} />
      <meta
        property="og:url"
        content={`https://iportfolio.co.kr${
          language === 'en' ? '/en' : ''
        }${pageLink}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://iportfolio.co.kr/og.png" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href={favicon_apple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon_32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon_16} />
      {/* 네이버 검색 등록: https://searchadvisor.naver.com/console/board */}
      <meta
        name="naver-site-verification"
        content="53ae0c49da74b7928e31c45365826bf74ea5384a"
      />
    </Helmet>
  );
};

export default HelmetComponent;
