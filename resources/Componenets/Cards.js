import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/SizeModerator';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';

const Cards = ({ value, type, size = 1}) => {
  const imageMap = {
    heart: require('../../assets/images/heart.png'),
    diamond: require('../../assets/images/diamond.png'),
    club: require('../../assets/images/club.png'),
    spade: require('../../assets/images/spade.png'),
  };

  const isRedSuit = type === 'heart' || type === 'diamond';
  const color = isRedSuit ? 'red' : 'black';

  const scaledHorizontal = (val) => horizontalScale(val) * size;
  const scaledVertical = (val) => verticalScale(val) * size;
  const scaledModerate = (val) => moderateScale(val) * size;

  return (
    <View style={[styles.cardsContainer, { width: scaledHorizontal(73), height: scaledVertical(470), borderRadius: scaledModerate(8), padding: scaledModerate(5) }]}>
      <View style={[styles.valueContainer, { width: scaledHorizontal(20), height: scaledVertical(90), marginBottom: scaledVertical(20) }]}>
        <Text style={[styles.valueText, { fontSize: scaledModerate(23), color }]}>{value}</Text>
      </View>
      <View style={[styles.imageContainer, { width: scaledHorizontal(20), height: scaledVertical(90) }]}>
        <Image source={imageMap[type]} style={{ width: scaledHorizontal(20), height: scaledVertical(90) }} resizeMode="contain" />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontFamily: 'Roboto_700Bold',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cards;
