import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Text style={styles.p}>
        I'\''m an early-career software developer currently studying Computer Science.
        I build small web and mobile projects to learn full-stack development and product thinking.
      </Text>

      <Text style={[styles.p, styles.mt]}>
        Skills: JavaScript / TypeScript, React & React Native, basic Node.js, REST APIs, and Git.
        I also have experience with UI fundamentals, responsive layouts, and testing.
      </Text>

      <Text style={[styles.p, styles.mt]}>
        Interests: user-centered design, accessibility, performance optimization, and learning new
        tools that help ship polished products quickly.
      </Text>

      <Text style={[styles.p, styles.mt]}>
        I'\''m open to internships, mentoring, and collaborative projects — happy to chat!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 20, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
  p: { color: "#475569", fontSize: 15, lineHeight: 22 },
  mt: { marginTop: 10 },
});
