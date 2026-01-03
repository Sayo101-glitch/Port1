import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import type { Project } from "./types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => Linking.openURL(project.url)}
    >
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.desc}>{project.description}</Text>

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8fafc",
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  title: { fontSize: 16, fontWeight: "600", color: "#0f172a" },
  desc: { marginTop: 6, color: "#475569" },
  techRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  techPill: {
    backgroundColor: "#eef2f7",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginRight: 6,
    marginTop: 6,
  },
  techText: { fontSize: 12, color: "#334155" },
});
