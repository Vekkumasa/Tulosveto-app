import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import request from '../requests';
import Match from './Match';

import { MatchData } from '../types';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const Matches = () => {
  const [ matches, setMatches ] = useState<MatchData[]>([]);

  useEffect(() => {
    const response = request();
    void response.then((res) => {
      res && setMatches(res.response);
    });
  }, []);

  if (matches.length == 0) return <View></View>;
  return (
    <View style={styles.container}>
      <FlatList<MatchData>
        data={matches}
        renderItem={( match ) => <Match match={match} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.fixture.id.toString()}
      />
    </View>
  );
};

export default Matches;