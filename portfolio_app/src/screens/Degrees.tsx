import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Animated } from 'react-native';
import DegreeCard from '../components/DegreeCard';
import { IMAGES } from '../config/images';

const DEGREES = [
  {
    id: '1',
    title: 'B.Sc. Computer Science',
    institution: 'State University',
    year: '2018',
    notes: 'Focus: Algorithms & Systems',
  },
  {
    id: '2',
    title: 'M.Sc. Software Engineering',
    institution: 'Tech Institute',
    year: '2020',
    notes: 'Thesis: Scalable web architectures',
  },
  {
    id: '3',
    title: 'Diploma in Interaction Design',
    institution: 'Creative College',
    year: '2016',
    notes: 'UI/UX specialization',
  },
];

export default function Degrees() {
  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.degrees} style={styles.header} imageStyle={{ opacity: 0.14 }}>
        <Animated.View style={{ opacity: fade }}>
          <Text style={styles.headerTitle}>Degrees</Text>
        </Animated.View>
      </ImageBackground>
      <FlatList
        data={DEGREES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DegreeCard degree={item} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
});
