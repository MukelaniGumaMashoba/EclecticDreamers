import { useContext } from 'react';
import { Text, View } from 'react-native'
import { UserContext } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';

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

    </SafeAreaView>
  )
}

export default AccountScreen

//rafce