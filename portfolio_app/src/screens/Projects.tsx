import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Animated } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import { IMAGES } from '../config/images';

const PROJECTS = [
  {
    id: '1',
    title: 'Taskly — Productivity Tracker',
    description:
      'A cross-platform productivity app to track tasks, set goals, and visualize progress with charts and reminders.',
    link: 'https://example.com/taskly',
  },
  {
    id: '2',
    title: 'Porta — Personal Website Generator',
    description:
      'Static site generator for developers with themeable templates, Markdown support, and easy deployment.',
    link: 'https://example.com/porta',
  },
  {
    id: '3',
    title: 'GreenCart — Eco Shopping',
    description:
      'An e-commerce prototype focused on sustainable products, showing product listings, filters and checkout flows.',
    link: 'https://example.com/greencart',
  },
];

export default function Projects() {
  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.projects} style={styles.header} imageStyle={{ opacity: 0.14 }}>
        <Animated.View style={{ opacity: fade }}>
          <Text style={styles.headerTitle}>Projects</Text>
        </Animated.View>
      </ImageBackground>
      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard project={item} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
});
