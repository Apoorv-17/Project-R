import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { colors, parameters, title } from '../../global/styles';
// import * as Animatable from 'react-native-animatable';

import Swiper from 'react-native-swiper';

// import Header from '../../components/header';

import { Icon, Button, SocialIcon } from 'react-native-elements';

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
    >
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}
        >
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}
        >
          IN YOUR AREA
        </Text>
      </View>

      <View style={{}}>
        <Swiper autoplay={true} style={{ height: 250 }}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322303/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://blog.travelkhana.com/food/wp-content/uploads/sites/5/2017/12/1_2.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/D%C3%A9lices_de_Paris.jpg/1200px-D%C3%A9lices_de_Paris.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.crazymasalafood.com/wp-content/images/fried-chicken-momos.jpg',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              this.props.navigation.navigate('SignUpScreen');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
