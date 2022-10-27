import {Button, StyleSheet, Text, View} from 'react-native';
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
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
