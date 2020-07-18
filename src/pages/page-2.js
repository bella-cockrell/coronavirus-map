import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>The project</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>The project</h1>
        <p>This map was created using the API
          <a href='https://corona.lmao.ninja/v2/countries'
            target='_blank'
            rel='noopener noreferrer'>
            here
          </a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
