import React from 'react';
import { Helmet } from 'react-helmet';

import OpenGraphImage from '../../../images/ressources/logo-large.png';

export function SeoContent({ data }) {
  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <meta charSet='utf-8' />
      <meta name='robots' content='index, follow' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'></meta>
      <link rel='canonical' href={data.site.siteMetadata.canonicalUrl} />

      <title>{data.site.siteMetadata.title}</title>
      <meta name='title' content={data.site.siteMetadata.title} />
      <meta name='description' content={data.site.siteMetadata.description} />
      <meta name='keywords' content={data.site.siteMetadata.keywords} />
      <link rel='image_src' href={OpenGraphImage} />

      <meta property='og:type' content='profile' />
      <meta property='og:locale' content='fr_FR' />
      <meta property='profile:first_name' content='Thomas' />
      <meta property='profile:last_name' content='ROUX' />
      <meta property='og:title' content={data.site.siteMetadata.title} />
      <meta
        property='og:description'
        content={data.site.siteMetadata.description}
      />
      <meta property='og:url' content={data.site.siteMetadata.siteUrl} />
      <meta property='og:site_name' content={data.site.siteMetadata.title} />
      <meta
        property='profile:username'
        content={data.site.siteMetadata.username}
      />
      <meta property='og:image' content={OpenGraphImage} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:author'
        content={data.site.siteMetadata.username}
      />
      <meta property='twitter:url' content={data.site.siteMetadata.siteUrl} />
      <meta property='twitter:title' content={data.site.siteMetadata.title} />
      <meta
        property='twitter:description'
        content={data.site.siteMetadata.description}
      />
      <meta property='twitter:image' content={OpenGraphImage} />
    </Helmet>
  );
}
