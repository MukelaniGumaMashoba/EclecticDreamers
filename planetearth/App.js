import React from 'react';
import {ScrollView,StyleSheet,Text,View,Button,TouchableOpacity,ImageBackground} from 'react-native';
import Log from './src/screens/LogScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/components/Logo.js';
import Register from './src/screens/RegisterScreen.js';
import registerNNPushToken from 'native-notify';


function HomeScreen({ navigation }) {
  return (
    // <ImageBackground>
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <Text style={styles.header}>Hello.</Text>
      <Button
        title="LogIn"
        onPress={() => navigation.navigate('Login')}
      />
      <View style={styles.row}>
        <Text>You do not have an account yet?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Create!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.containerT}>
        <Text style={styles.text}>Welcome to Login</Text>
      </View>
      <Log />
    </ScrollView>
  );
}
function RegScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.containerT}>
        <Text style={styles.text}>Welcome to Sign Up</Text>
      </View>
      <Register />
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  registerNNPushToken(12285, 'lOMiA9DsNGC6YkHbeAGF2q');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={DetailsScreen} />
        {/* <Stack.Screen name="Register" component={RegScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  link: {
    color: 'blue',
    marginLeft: 5,
  },
  containerT: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,

  },
});