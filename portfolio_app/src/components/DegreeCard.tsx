import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';

export default function DegreeCard({ degree }: { degree: { title: string; institution: string; year: string; notes?: string } }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 0.98, useNativeDriver: true }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={() => {}}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}> 
        <Text style={styles.title}>{degree.title}</Text>
        <Text style={styles.institution}>{degree.institution} • {degree.year}</Text>
        {degree.notes ? <Text style={styles.notes}>{degree.notes}</Text> : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 12, marginBottom: 12, elevation: 3 },
  title: { fontSize: 16, fontWeight: '700' },
  institution: { marginTop: 6, color: '#555' },
  notes: { marginTop: 6, color: '#666', fontStyle: 'italic' },
});

