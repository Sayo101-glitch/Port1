import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable, Linking } from 'react-native';

export default function ProjectCard({ project }: { project: { title: string; description: string; link?: string } }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  };
  const onPressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  const openLink = () => {
    if (project.link) Linking.openURL(project.link).catch(() => {});
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={openLink}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}> 
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.desc}>{project.description}</Text>
        {project.link ? (
          <View style={styles.row}>
            <Pressable onPress={openLink} style={styles.button}>
              <Text style={styles.buttonText}>View Project</Text>
            </Pressable>
          </View>
        ) : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 12, marginBottom: 12, elevation: 3 },
  title: { fontSize: 18, fontWeight: '700' },
  desc: { marginTop: 6, color: '#444' },
  row: { marginTop: 10, flexDirection: 'row' },
  button: { backgroundColor: '#0a84ff', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '600' },
});
