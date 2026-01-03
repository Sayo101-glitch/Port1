import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Animated } from 'react-native';
import { IMAGES } from '../config/images';

export default function Home() {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={IMAGES.home} style={styles.hero} imageStyle={{ opacity: 0.12 }}>
        <Animated.View style={{ opacity: fade, alignItems: 'center' }}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>This is a simple portfolio app.</Text>
        </Animated.View>
      </ImageBackground>
      <Text style={styles.body}>Use the tabs to view Projects and Degrees.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center' },
  hero: { width: '100%', padding: 28, alignItems: 'center', borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 12 },
  body: { fontSize: 16, textAlign: 'center' },
});
