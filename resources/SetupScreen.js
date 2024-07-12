import * as React from 'react';
import { View, FlatList, ImageBackground, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { horizontalScale, verticalScale } from '../utils/SizeModerator';
import Cards from './Componenets/Cards';
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

    const renderItem = ({ item }) => (
        <Cards value={item.value} type={item.suit} size={1} scrollX={scrollX} />
    );

    const onScrollHandler = (event) => {
        scrollX.value = event.nativeEvent.contentOffset.x;  
        // console.log(scrollX.value);
      };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../assets/images/10081437.jpg")}
                style={styles.background}
            >
                <SafeAreaView style={styles.safeArea}>
                    <FlatList
                        style={styles.flatList}
                        contentContainerStyle={styles.flatListContent}
                        data={first21Cards}
                        renderItem={renderItem}
                        onViewableItemsChanged={(viewableItems) =>{
                            
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}  // Set FlatList to horizontal
                        ItemSeparatorComponent={() => <View style={{ width: horizontalScale(15) }} />}  // Adjust separator for horizontal layout
                        showsHorizontalScrollIndicator={false}  // Hide horizontal scroll indicator
                        onScroll={onScrollHandler}
                        scrollEventThrottle={16}
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
