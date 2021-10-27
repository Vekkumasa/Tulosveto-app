import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import Matches from './Matches';

import { useQuery } from '@apollo/client';

import { TESTI } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, loading } = useQuery(TESTI);
  console.log('testi', data,error,loading);
  return (
    <View style={styles.container}>
      <Text> Tulosveto - app</Text>
      <Matches />
    </View>
  );
};

export default Main;