import React from "react";
import { View, Text, StyleSheet, LayoutChangeEvent } from "react-native";
import ProjectCard from "./ProjectCard";
import type { Project } from "./types";

const projects: Project[] = [
  {
    id: "p1",
    title: "Personal Website",
    description: "A responsive portfolio built with React Native Web and Expo.",
    tech: ["React", "Expo", "TypeScript"],
    url: "https://example.com",
  },
  {
    id: "p2",
    title: "Mobile App",
    description: "Cross-platform app showcasing animations and offline sync.",
    tech: ["React Native", "Redux", "SQLite"],
    url: "https://example.com",
  },
  {
    id: "p3",
    title: "Open Source Lib",
    description: "A small utility library published on npm with docs.",
    tech: ["TypeScript", "Node", "Jest"],
    url: "https://example.com",
  },
];

export default function ProjectsSection({ onLayout }: { onLayout?: (e: LayoutChangeEvent) => void }) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.title}>Projects</Text>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 20, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
});
