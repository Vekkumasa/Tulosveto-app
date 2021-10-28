import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, Route, Redirect } from 'react-router';

import Matches from './Matches';
import LoginForm from '../forms/LoginForm';
import AppBar from './AppBar';
//import { useQuery } from '@apollo/client';
//import { TESTI } from '../graphql/queries';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//  const { data, error, loading } = useQuery(TESTI);
//  console.log('testi', data,error,loading);
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Matches />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;