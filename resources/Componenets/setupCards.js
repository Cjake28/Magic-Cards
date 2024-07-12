import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/SizeModerator';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import Cards from './Cards'

export default function SetupCards({ item, size, scrollX, index}){

    
    
    return(
        <Cards 
            value={item.value} 
            type={item.suit} size={1}  
            style={{
                    marginRight: index == 20 ? horizontalScale(60):horizontalScale(30), 
                    marginLeft: index == 0 ? horizontalScale(60): 0
                }}/>
    );
}