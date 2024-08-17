'use client';

import type {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import {BASE_URL} from "@/shared/static/constants";

const Provider: FC<PropsWithChildren> = ({children}) => (
  <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="nofollow alternate" hrefLang="ru" href={`https://${BASE_URL}/ru`}/>
      <link rel="nofollow alternate" hrefLang="en" href={`https://${BASE_URL}/en`}/>
      <link rel="nofollow alternate" hrefLang="x-default" href={`https://${BASE_URL}/ru`}/>
      <link rel="nofollow canonical" href={`https://${BASE_URL}/en`}/>
    </Head>
    <>
      {children}
    </>
  </>
);

export default Provider;
