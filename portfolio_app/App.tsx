import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  NativeSyntheticEvent,
  LayoutChangeEvent,
  ScrollView as RNScrollView,
} from 'react-native';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Personal Website',
    description: 'A responsive portfolio built with React Native Web and Expo.',
    tech: ['React', 'Expo', 'TypeScript'],
    url: 'https://example.com',
  },
  {
    id: 'p2',
    title: 'Mobile App',
    description: 'Cross-platform app showcasing animations and offline sync.',
    tech: ['React Native', 'Redux', 'SQLite'],
    url: 'https://example.com',
  },
  {
    id: 'p3',
    title: 'Open Source Lib',
    description: 'A small utility library published on npm with docs.',
    tech: ['TypeScript', 'Node', 'Jest'],
    url: 'https://example.com',
  },
];

export default function App() {
  const scrollRef = useRef<RNScrollView | null>(null);
  const [projectsY, setProjectsY] = useState<number | null>(null);

  const handleScrollToProjects = () => {
    if (projectsY != null && scrollRef.current) {
      scrollRef.current.scrollTo({ y: projectsY, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
        <Header onViewWork={handleScrollToProjects} />
        <About />
        <View
          onLayout={(e: LayoutChangeEvent) => {
            setProjectsY(e.nativeEvent.layout.y);
          }}>
          <Projects />
        </View>
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
}

function Header({ onViewWork }: { onViewWork: () => void }) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>Sayoni</Text>
      <Text style={styles.role}>Product-focused Software Engineer</Text>
      <Text style={styles.oneLine}>I build accessible, performant apps that people enjoy using.</Text>

      <TouchableOpacity style={styles.cta} activeOpacity={0.85} onPress={onViewWork}>
        <Text style={styles.ctaText}>View My Work</Text>
      </TouchableOpacity>
    </View>
  );
}

function About() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About</Text>

      <Text style={styles.paragraph}>
        I'm an early-career software developer currently studying Computer Science.
        I build small web and mobile projects to learn full-stack development and product thinking.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 10 }]}>
        Skills: JavaScript / TypeScript, React & React Native, basic Node.js, REST APIs, and Git.
        I also have experience with UI fundamentals, responsive layouts, and testing.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 10 }]}>
        Interests: user-centered design, accessibility, performance optimization, and learning new
        tools that help ship polished products quickly.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 10 }]}>
        I'm open to internships, mentoring, and collaborative projects — happy to chat!
      </Text>
    </View>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.projectCard}
      onPress={() => Linking.openURL(project.url)}
    >
      <Text style={styles.cardTitle}>{project.title}</Text>
      <Text style={styles.cardBody}>{project.description}</Text>
      <View style={styles.techRow}>
        {project.tech.map((t) => (
          <View key={t} style={styles.techPill}>
            <Text style={styles.techText}>{t}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

function Projects() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </View>
  );
}

function Contact() {
  const email = 'hello@example.com';
  return (
    <View style={[styles.section, styles.contact]}>
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.paragraph}>Interested in collaborating? Reach out:</Text>
      <TouchableOpacity
        style={styles.emailButton}
        onPress={() => Linking.openURL(`mailto:${email}`)}>
        <Text style={styles.emailText}>{email}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 20, paddingBottom: 48 },
  header: { marginBottom: 24, paddingHorizontal: 2 },
  name: { fontSize: 36, fontWeight: '700', color: '#0f172a' },
  role: { marginTop: 6, fontSize: 16, color: '#334155' },
  oneLine: { marginTop: 12, fontSize: 15, color: '#475569', lineHeight: 22 },
  cta: {
    marginTop: 18,
    backgroundColor: '#0ea5a4',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  ctaText: { color: '#fff', fontWeight: '600' },

  section: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  paragraph: { color: '#475569', fontSize: 15, lineHeight: 22 },

  projectCard: {
    backgroundColor: '#f8fafc',
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#0f172a' },
  cardBody: { marginTop: 6, color: '#475569' },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    gap: 8,
  },
  techPill: {
    backgroundColor: '#eef2f7',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginRight: 6,
  },
  techText: {
    fontSize: 12,
    color: '#334155',
  },

  contact: { alignItems: 'flex-start' },
  emailButton: {
    marginTop: 10,
    backgroundColor: '#0ea5a4',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  emailText: { color: '#fff', fontWeight: '600' },
});