import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/SizeModerator';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';

const Cards = ({ 
  value = 'J',
  type = 'spade', 
  Container = {
    width: horizontalScale(73), 
    height: verticalScale(470), 
    borderRadius: moderateScale(8), 
    padding: moderateScale(5)
  }, 
  text = {
    fontSize: moderateScale(23), 
    color: 'black'
  }, 
  Image: imageStyle = {
    width: horizontalScale(20), 
    height: verticalScale(90)
  }
}) => {
  const imageMap = {
    heart: require('../../assets/images/heart.png'),
    diamond: require('../../assets/images/diamond.png'),
    club: require('../../assets/images/club.png'),
    spade: require('../../assets/images/spade.png'),
  };

  const isRedSuit = type === 'heart' || type === 'diamond';
  const color = isRedSuit ? 'red' : 'black';

  return (
    <View style={[styles.cardsContainer, Container]}>
      <View style={styles.valueContainer}>
        <Text style={[styles.valueText, text, { color }]}>{value}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageMap[type]} style={imageStyle} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    backgroundColor: '#F2F2F2',
    borderWidth: 0.5,
    borderColor: 'grey',
    elevation: 10,
  },
  valueContainer: {
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  valueText: {
    fontFamily: 'Roboto_700Bold',
  },
  imageContainer: {
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Cards;
