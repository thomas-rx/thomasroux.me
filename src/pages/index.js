import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';

import { SeoContent } from '../components/common/Seo/SeoContent';
import PageContent from '../components/landing';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        username
        email
        canonicalUrl
        siteUrl
        wordlyUrl
        linkedinUrl
        githubUrl
        twitterUrl
        maltUrl

        matomo {
          siteId
          urlBase
        }
      }
    }
  }
`;

const production = process.env.NODE_ENV === 'production';

export default function Page({ data }) {
  production ? console.log('Production mode') : console.log('Development mode');

  const instance = createInstance({
    siteId: data.site.siteMetadata.matomo.siteId,
    urlBase: data.site.siteMetadata.matomo.urlBase,
    disabled: production ? false : true,
    heartBeat: {
      active: true,
      seconds: 10,
    },
  });

  useEffect(() => {
    instance.trackPageView();
  }, []);

  return (
    <MatomoProvider value={instance}>
      <SeoContent data={data} />
      <PageContent data={data} />
    </MatomoProvider>
  );
}
