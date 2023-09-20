import { useContext } from 'react';
import { Text, View } from 'react-native'
import { UserContext } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';

const AccountScreen = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <SafeAreaView>

      <Text>
        AccountScreen
      </Text>
      <Text>
        {user.email}
      </Text>

      <Button title='LogOut' onPress={() => {UserContext(null)}}/>
    </SafeAreaView>
  )
}

export default AccountScreen

//rafce