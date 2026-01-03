import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Hero({ onPress }: { onPress?: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Sayoni</Text>
      <Text style={styles.role}>Product-focused Software Engineer</Text>
      <Text style={styles.intro}>I build accessible, performant apps that people enjoy using.</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.buttonText}>View My Work</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0f172a',
  },
  role: {
    marginTop: 6,
    fontSize: 16,
    color: '#334155',
  },
  intro: {
    marginTop: 12,
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    maxWidth: 680,
  },
  button: {
    marginTop: 18,
    backgroundColor: '#0ea5a4',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});