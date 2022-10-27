import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24}}>Home</Text>

      <Button
        title="Go to detail"
        onPress={() => {
          navigation.navigate('ProductDetail', {headerTitle: 'Product 1'});
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
