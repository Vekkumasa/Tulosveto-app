import React from 'react';
import { StyleSheet, View, Image, ListRenderItemInfo, Dimensions } from 'react-native';
import { MatchData, Goals } from '../types';
import { formatDay } from '../utils/DateFormat';

import CustomText from './CustomText';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    borderWidth: 2,
    borderRadius: 30,
    width: Dimensions.get('window').width - 15,
    maxHeight: 90,
    minHeight: 90
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  }
});

interface props {
  match: ListRenderItemInfo<MatchData>
}

interface ResultProps {
  home: number | 'TBA' | null,
  away: number | 'TBA' | null,
  homeLogo: string,
  awayLogo: string
}

const Score = ({ home, away }: Goals) => {
  if (home === null) {
    home = 'TBA';
    away = 'TBA';
  }

  return (
      <CustomText fontWeight='bold' style={{ marginTop: 10 }}> {home} - {away}</CustomText>
  );
};

const Result: React.FC<ResultProps> = ({ home, away, homeLogo, awayLogo}) => {
  return (
    <View style={[styles.flex, { justifyContent: 'space-between', marginBottom: 40}]}>
      <Image style={[styles.logo, { marginLeft: 20 } ]} source={{ uri: homeLogo }}/>
      <Score home={home} away={away} />
      <Image style={[styles.logo, { marginRight: 20 } ]} source={{ uri: awayLogo }}/>
    </View>
  );
};

const Match: React.FC<props> = ({ match }) => {
  return (
    <View style={styles.container}>
      <CustomText fontWeight='bold' style={[styles.flex, styles.center]}> {formatDay(match.item.fixture.timestamp)} </CustomText>
      <View style={[styles.flex]}>
        <Result 
          home={match.item.goals.home}
          away={match.item.goals.away}
          homeLogo={match.item.teams.home.logo}
          awayLogo={match.item.teams.away.logo}
        />
      </View>  
    </View>
  );
};

export default Match;