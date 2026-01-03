import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const projects = [
  {
    id: 'p1',
    title: 'Personal Website',
    description: 'A responsive portfolio built with React Native Web and Expo.',
    url: 'https://example.com',
  },
  {
    id: 'p2',
    title: 'Mobile App',
    description: 'Cross-platform app showcasing animations and offline sync.',
    url: 'https://example.com',
  },
  {
    id: 'p3',
    title: 'Open Source Lib',
    description: 'A small utility library published on npm with docs.',
    url: 'https://example.com',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <About />
        <Projects />
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>Sayoni</Text>
      <Text style={styles.tagline}>Product-focused software engineer</Text>
      <Text style={styles.wave}>👋</Text>
    </View>
  );
}

function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.paragraph}>
        I build useful, accessible applications with attention to performance and UX.
        I enjoy working across the stack and learning new tools.
      </Text>
    </View>
  );
}

function Projects() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((p) => (
        <TouchableOpacity
          key={p.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => Linking.openURL(p.url)}
        >
          <Text style={styles.cardTitle}>{p.title}</Text>
          <Text style={styles.cardBody}>{p.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Contact() {
  const email = 'hello@example.com';
  return (
    <View style={[styles.section, styles.contactSection]}>
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.paragraph}>Interested in collaborating? Reach out:</Text>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      >
        <Text style={styles.contactButtonText}>{email}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: {
    padding: 20,
    paddingBottom: 48,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0f172a',
  },
  tagline: {
    marginTop: 6,
    fontSize: 16,
    color: '#334155',
  },
  wave: {
    marginTop: 10,
    fontSize: 28,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  paragraph: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  cardBody: {
    marginTop: 6,
    color: '#475569',
  },
  contactSection: {
    alignItems: 'flex-start',
  },
  contactButton: {
    marginTop: 10,
    backgroundColor: '#0ea5a4',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});