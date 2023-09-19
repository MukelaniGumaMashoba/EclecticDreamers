import React from 'react'
import Logo from '../components/Logo'

import { Text, View } from 'react-native'

export default function Dashboard({ navigation }) {
  return (
    <View>
      <Logo />
      <Text>Welcome 💫</Text>
      <Text>
        Congratulations you are logged in.
      </Text>
    </View>
  )
}