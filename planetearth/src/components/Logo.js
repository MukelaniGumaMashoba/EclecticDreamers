import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/Logo.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: "85%",
    height: 180,
    marginBottom: 50,
    justifyContent: "center",
    alignItems:"center",
  },
})