import React from 'react';
import Constants from 'expo-constants';
import { View, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginBottom: 20,
    backgroundColor: '#24292e',
    display: 'flex',
    flexDirection: 'row',
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
});

interface AppBarTabProps {
  children: string
}


const AppBarTab = ({ children, ...props }: AppBarTabProps) => {
  return (
    <Pressable style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <CustomText fontWeight="bold" style={styles.tabText}>
          {children}
        </CustomText>
      </View>
    </Pressable>
  );
};

const AppBar = () => {
  
  return(
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Matches
        </Link>
        <Link to="login" component={AppBarTab}>
          Log in
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;