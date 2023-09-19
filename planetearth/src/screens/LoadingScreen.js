import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const LoadingScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                LoadingScreen
            </Text>

            <Button title='Start' onPress={()=>navigation.navigate("Login")}/>
        </SafeAreaView>
    )
}
