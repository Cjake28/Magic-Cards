
import { View, Text, Button, BackHandler, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <ImageBackground 
      source={require("../assets/images/10081437.jpg")} 
        style={styles.background}
      >
        <View style={styles.centeredView}>
          <Text style={styles.text}>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Setup')}
          />
        </View>
      </ImageBackground>
    );
  };


  const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily:'Roboto_700Bold',
      color: 'white',
      fontSize: 24, 
    },
  });

export default HomeScreen;