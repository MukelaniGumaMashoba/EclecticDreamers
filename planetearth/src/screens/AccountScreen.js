import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Text, View, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthNavigator from '../navigation/AuthNavigation.js';

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    <AuthNavigator />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AccountScreen</Text>
      <Text>{user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


