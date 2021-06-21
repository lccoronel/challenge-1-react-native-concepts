import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface HeaderProps {
  theme: boolean;
  changeTheme: () => void;
}

export function Header({ theme, changeTheme }: HeaderProps): JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: theme ? "#3E3E3E" : "#273FAD" }}>
      <Switch 
        thumbColor={theme ? "#fff" : "#273FAD"}
        ios_backgroundColor="#fff"
        onValueChange={() => changeTheme}
        value={theme}
        style={styles.switch}
      />
      <View style={[styles.header, { backgroundColor: theme ? "#3E3E3E" : "#273FAD" }]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  switch: {
    alignSelf: "center"
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
