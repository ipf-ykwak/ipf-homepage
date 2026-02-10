import { graphql } from 'gatsby';
import React from 'react';

import Home from './home';

function App() {
  return <Home />;
}

export default App;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
