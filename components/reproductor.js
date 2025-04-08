import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

const Reproductor = ({
  sound,
  isPlaying,
  volume,
  currentSong,
  currentStation,
  isTransmitting,
  isPlayButtonEnabled,
  isSwitchButtonEnabled,
  togglePlayPause,
  handleVolumeChange,
  switchStation,
  RADIO_URL_A
}) => {
  const [songTitle, setSongTitle] = useState(currentSong || 'Cargando...');

  useEffect(() => {
    setSongTitle(currentSong || 'Sin información');
  }, [currentSong]);

  return (
    <>
      <View style={styles.onAirContainer}>
        <Text style={[styles.onAirText, !isTransmitting && styles.onAirTextOff]}>ON AIR</Text>
      </View>

      <View style={styles.playerContainer}>
        <View style={styles.playerButtons}>
          <TouchableOpacity
            onPress={togglePlayPause}
            disabled={!isPlayButtonEnabled}
            style={[
              styles.playButton,
              isPlayButtonEnabled && (isPlaying ? styles.playButtonActive : styles.playButtonReady),
              !isPlayButtonEnabled && styles.playButtonInactive,
            ]}
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={28}
              color={isPlayButtonEnabled ? 'White' : '#444'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={switchStation}
            disabled={!isSwitchButtonEnabled}
            style={[
              styles.switchButton,
              isSwitchButtonEnabled ? styles.switchButtonEnabled : styles.switchButtonDisabled,
            ]}
          >
            <Text style={styles.switchButtonText}>
              {currentStation === RADIO_URL_A ? 'Lado B' : 'Lado A'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.volumeContainer}>
          <Ionicons name="volume-medium" size={24} color="#000" style={styles.volumeIcon} />
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={handleVolumeChange}
            minimumTrackTintColor="#c40000"
            maximumTrackTintColor="#999"
            thumbTintColor="#c40000"
          />
        </View>
      </View>

      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>Sonando ahora:</Text>
        <Text style={styles.songName}>{songTitle}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  onAirContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  onAirText: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 16,
  },
  onAirTextOff: {
    backgroundColor: 'gray',
  },
  playerContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  playerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonActive: {
    backgroundColor: '#ffd700',
  },
  playButtonReady: {
    backgroundColor: '#ffd700',
  },
  playButtonInactive: {
    backgroundColor: 'grey',
  },
  switchButton: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
  switchButtonEnabled: {
    backgroundColor: '#c40000',
  },
  switchButtonDisabled: {
    backgroundColor: 'grey',
  },
  switchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  volumeIcon: {
    marginRight: 10,
  },
  slider: {
    width: '70%',
  },
  songInfoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c40000',
  },
  songName: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
});

export default Reproductor;