import React, { useState, useRef } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors, title, parameters } from '../../global/styles';
import * as Animatable from 'react-native-animatable';

import Header from '../../components/header';

import { Icon, Button, SocialIcon } from 'react-native-elements';

export default function SignInScreen({ navigation }) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{ width: '80%' }}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />

          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>
          Forgot Password ??
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>
          OR
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginLeft: 25, marginTop: 10 }}>
        <Text style={{ ...styles.text1 }}>New on XpressFood ?</Text>
      </View>

      <View
        style={{ alignItems: 'flex-end', marginTop: 5, marginHorizontal: 20 }}
      >
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 2,
    borderColor: '#86939e',
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 15,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
