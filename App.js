import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import Sound from 'react-native-sound'

const soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav")
]

const playSound = (sound) => {
  const woosh = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log("unable to play sound");
    }
  })
  try {
    setTimeout(() => {
      woosh.play()
    }, 1000);
  } catch (error) {
    console.log(error);
  }
  woosh.release()
}

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={styles.gridConatiner}>
        {soundList.map((sound) => (
          <TouchableOpacity key={sound} style={styles.box}>
            <Text style={styles.text} onPress={() => playSound(sound)}> {sound} </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c'
  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  gridConatiner: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: "45%",
    marginVertical: 6,
    backgroundColor: "#0f4c75",
    borderRadius: 5,
    shadowColor: "#393e46",
    elevation: 5
  },
  text: {
    fontSize: 50,
    color: "#ff4301"
  }

})

export default App
