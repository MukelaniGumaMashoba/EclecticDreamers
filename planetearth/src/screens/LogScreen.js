import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, ScrollView, Text, TextInput, email, Button } from 'react-native'
import Logo from '../components/Logo.js';

export default function Log({ navigation }) {
  return (
    <ScrollView>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo style={styles.ogo}/>
      {/* <Text>Hello.</Text> */}
      <View>
        <TextInput
          label="Email"
          returnKeyType="next" style={styles.input}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done" style={styles.input}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password ?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" title='Log in' />
        <View style={styles.row}>
          <Text>You do not have an account yet ?</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>Create !</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}


const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 16,
    padding: 6,
    fontSize: 16,
    marginLeft: 6,
    marginRight: 6,
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgot: {
    color: 'blue',

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
};
