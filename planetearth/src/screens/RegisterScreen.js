import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, ScrollView, Text, TextInput, email, Button } from 'react-native'
import Logo from '../components/Logo.js';

export default function Register({ navigation }) {
  return (
    <ScrollView>
      <Logo />
      <TextInput
        label="Email"
        returnKeyType="next" style={styles.input}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Username"
        returnKeyType="next" style={styles.input}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="usera=name"
        keyboardType="username"
      />
      <TextInput
        label="Password"
        returnKeyType="done" style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" title='Enter' />
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
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
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
};
