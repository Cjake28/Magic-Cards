import * as React from 'react';
import { View, FlatList, ImageBackground, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { horizontalScale, verticalScale } from '../utils/SizeModerator';
import SetupCards from './Componenets/setupCards';
import Shuffle from './scrpit/shuffle';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';

const SetupScreens = ({ navigation }) => {
    const scrollX = useSharedValue(0);
    // useFocusEffect(
    //   React.useCallback(() => {
    //     const onBackPress = () => {
    //       // Prevent going back
    //       return true;
    //     };

    //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

    //     return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    //   }, [])
    // );

    const first21Cards = Shuffle();

    const renderItem = ({ item, index }) => (
        <SetupCards item={item} size={1} scrollX={scrollX} index={index}/>
    );

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../assets/images/10081437.jpg")}
                style={styles.background}
            >
                <SafeAreaView style={styles.safeArea}>
                    <Animated.FlatList
                        scrollEventThrottle={16}
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContent}
                        data={first21Cards}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}  // Hide horizontal scroll indicator
                        horizontal={true}  // Set FlatList to horizontal
                        // ItemSeparatorComponent={() => <View style={{ width: horizontalScale(15) }} />}  // Adjust separator for horizontal layout
                        onScroll={(event) => {
                            scrollX.value = event.nativeEvent.contentOffset.x;  
                        }}
                        
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        flex: 1,
        width: Dimensions.get('window').width,  // Ensure FlatList spans the entire width
    },
    flatListContent: {
        justifyContent: 'center',  // Center items horizontally
        alignItems: 'center',  // Center items vertically
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SetupScreens;
