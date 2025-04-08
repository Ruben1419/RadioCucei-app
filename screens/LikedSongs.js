import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const LikedSongs = () => {
  // Ejemplo de datos de canciones guardadas
  const savedSongs = [
    { id: '1', title: 'Canción 1', artist: 'Artista 1' },
    { id: '2', title: 'Canción 2', artist: 'Artista 2' },
    { id: '3', title: 'Canción 3', artist: 'Artista 3' },
  ];

  const renderSong = ({ item }) => (
    <View style={styles.songItem}>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songArtist}>{item.artist}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Canciones Guardadas</Text>
      <FlatList
        data={savedSongs}
        renderItem={renderSong}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  songItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 14,
    color: '#666',
  },
});

export default LikedSongs;