import {Button, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Button
        title="Login"
        onPress={() => {
          // navigate qua bottom tab và back trở lại login được
          // navigation.navigate('Main');

          // navigate qua bottom tab nhưng ko back trở lại login được
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Main'}],
          // });
          const latitude = '40.7127753';
          const longitude = '-74.0059728';
          const label = 'New York, NY, USA';

          const url = Platform.select({
            ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
            android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
          });
          console.log('💩: Login -> url', url);

          Linking.openURL(url);
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
