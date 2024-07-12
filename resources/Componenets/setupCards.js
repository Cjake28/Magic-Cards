import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/SizeModerator';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import Cards from './Cards'



const card_width = horizontalScale(73);
const spacing = horizontalScale(20);

export default function SetupCards({ item, scrollX, index}){
    
    const inputRange = [
        (index - 1) * (card_width + spacing),
        index * (card_width + spacing),
        (index + 1) * (card_width + spacing)
    ];

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
          scrollX.value,
          inputRange,
          [0.7, 1, 0.7],
          Extrapolation.CLAMP
        );
        const translateY = interpolate(
          scrollX.value,
          inputRange,
          [0, -50, 0],
          Extrapolation.CLAMP
        );
        return {
            transform: [
                { scaleY: scale },
                { scaleX: scale },
              //   { translateY: translateY }
              ]
        };
      });

    return(

        <Animated.View style={[{
            width:card_width,height: verticalScale(470),
            marginRight: index == 20 ? horizontalScale(60): spacing, 
            marginLeft: index == 0 ? horizontalScale(60): 0,
            },
                animatedStyle
            ]}>
        <Cards
            value={item.value} 
            type={item.suit} size={1}  
            Container={{
                    width: card_width,
                    height: verticalScale(470),
                    borderRadius: moderateScale(8), 
                    padding: moderateScale(6)
                }}
                
                text = {{
                    fontSize: moderateScale(23), 
                    color: 'black',
                    marginLeft: horizontalScale(5),
                    marginBottom: verticalScale(20)
                }} 
                />
            </Animated.View>
            
    );
}