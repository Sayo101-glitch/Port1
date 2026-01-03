import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

export default function ContactSection() {
  const email = "hello@example.com";
  const linkedin = "https://www.linkedin.com/in/your-profile";
  const github = "https://github.com/your-username";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.p}>Interested in collaborating? Reach out:</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
          <Text style={styles.link}>{email}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>LinkedIn</Text>
        <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
          <Text style={styles.link}>linkedin.com/in/your-profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>GitHub</Text>
        <TouchableOpacity onPress={() => Linking.openURL(github)}>
          <Text style={styles.link}>github.com/your-username</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, alignItems: "flex-start" },
  title: { fontSize: 20, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
  p: { color: "#475569", fontSize: 15, lineHeight: 22 },
  row: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  label: { width: 80, color: "#475569", fontWeight: "600" },
  link: { color: "#0ea5a4", fontWeight: "600" },
});
