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
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

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
      <SectionHeader iconName="information-circle-outline" title="About" />

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
      <SectionHeader iconName="code-slash-outline" title="Projects" />
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </View>
  );
}

function Contact() {
  const email = 'hello@example.com';
  const linkedin = 'https://www.linkedin.com/in/your-profile';
  const github = 'https://github.com/your-username';

  return (
    <View style={[styles.section, styles.contact]}>
      <SectionHeader iconName="mail-outline" title="Contact" />
      <Text style={styles.paragraph}>Interested in collaborating? Reach out:</Text>

      <View style={styles.contactRow}>
        <Ionicons name="mail-outline" size={18} color="#0ea5a4" style={styles.contactIcon} />
        <Text style={styles.contactLabel}>Email</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
          <Text style={styles.contactLink}>{email}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactRow}>
        <Entypo name="linkedin" size={18} color="#0ea5a4" style={styles.contactIcon} />
        <Text style={styles.contactLabel}>LinkedIn</Text>
        <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
          <Text style={styles.contactLink}>linkedin.com/in/your-profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactRow}>
        <Text style={styles.contactLabel}>GitHub</Text>
        <TouchableOpacity onPress={() => Linking.openURL(github)}>
          <Text style={styles.contactLink}>github.com/your-username</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SectionHeader({ iconName, title }: { iconName: string; title: string }) {
  return (
    <View style={styles.sectionHeaderRow}>
      <Ionicons name={iconName as any} size={20} color="#0ea5a4" style={styles.sectionIcon} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 48 },

  // Hero / header
  header: { marginBottom: 28, alignItems: 'flex-start' },
  name: { fontSize: 34, lineHeight: 40, fontWeight: '700', color: '#0f172a' },
  role: { marginTop: 6, fontSize: 15, lineHeight: 20, color: '#334155', fontWeight: '600' },
  oneLine: { marginTop: 12, fontSize: 15, lineHeight: 22, color: '#475569' },
  cta: {
    marginTop: 16,
    backgroundColor: '#0ea5a4',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  ctaText: { color: '#fff', fontWeight: '600', fontSize: 15 },

  // Sections
  section: { marginTop: 24 },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  sectionIcon: { marginRight: 8 },
  sectionTitle: { fontSize: 20, lineHeight: 26, fontWeight: '700', color: '#0f172a' },
  paragraph: { color: '#475569', fontSize: 15, lineHeight: 22 },

  // Project card
  projectCard: {
    backgroundColor: '#fbfdfe',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#e6eef2',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#0f172a' },
  cardBody: { marginTop: 8, color: '#475569', fontSize: 14, lineHeight: 20 },

  // Tech pills
  techRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 12 },
  techPill: {
    backgroundColor: '#eef6f6',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 8,
    marginTop: 8,
  },
  techText: { fontSize: 12, color: '#1f3340' },

  // Contact
  contact: { alignItems: 'flex-start', marginTop: 20 },
  contactRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  contactIcon: { marginRight: 8 },
  contactLabel: { width: 80, color: '#64748b', fontWeight: '600', fontSize: 14 },
  contactLink: { color: '#0ea5a4', fontWeight: '600', fontSize: 14 },

  // Helpers
  muted: { color: '#64748b' },
});