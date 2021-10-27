import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';
import createApolloClient from './src/utils/ApolloClient';

import Main from './src/components/Main';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const apolloClient = createApolloClient(Constants.manifest?.extra?.apollo_uri);

export default () => {

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};


