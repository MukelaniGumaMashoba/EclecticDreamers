import { useContext } from 'react';
import { Text, View } from 'react-native'
import { UserContext } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet } from 'react-native';

const AccountScreen = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <SafeAreaView style={styles.container}>

      <Text>
        AccountScreen
      </Text>
      <Text>
        {user.email}
      </Text>

      <Button title='LogOut' onPress={() => {UserContext('')}}/>
    </SafeAreaView>
  )
}

export default AccountScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  title: {
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
  ogo: {
    left: 100,
  }
});


//rafce