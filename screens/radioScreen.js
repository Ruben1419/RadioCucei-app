import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
  Dimensions,
  Platform,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { WebView } from 'react-native-webview';
import Menu from '../components/menu';
import Reproductor from '../components/reproductor';

const RADIO_URL_A = 'http://s3.streammonster.com:8225/stream';
const RADIO_URL_B = 'http://s3.streammonster.com:8225/ladob';
const METADATA_URL = 'http://64.150.176.42:8225/status-json.xsl';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RadioScreen() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentSong, setCurrentSong] = useState('Cargando...');
  const [currentStation, setCurrentStation] = useState(RADIO_URL_A);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const webViewRef = useRef(null);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isPlayButtonEnabled, setIsPlayButtonEnabled] = useState(false);
  const [isSwitchButtonEnabled, setIsSwitchButtonEnabled] = useState(true);
  const [metadataLoading, setMetadataLoading] = useState(true);
  const [metadataError, setMetadataError] = useState(false);

  // Verificar estado de la transmisión
  const checkTransmission = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(currentStation, {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setIsTransmitting(response.ok);
      setIsPlayButtonEnabled(response.ok);
    } catch (error) {
      setIsTransmitting(false);
      setIsPlayButtonEnabled(false);
    }
  };

  // Obtener metadatos de la canción
  const fetchMetadata = async () => {
    if (!isTransmitting) return;

    try {
      const response = await fetch(METADATA_URL);
      const rawData = await response.text();
      const data = JSON.parse(rawData);

      // Extraer título de la estructura del JSON
      const currentTrack = data.icestats?.source?.[0]?.title ||
        data.icestats?.source?.title ||
        'Título no disponible';

      setCurrentSong(currentTrack.replace(/^Currently playing: /, ''));
      setMetadataError(false);
    } catch (error) {
      console.error('Error obteniendo metadatos:', error);
      setMetadataError(true);
      setCurrentSong('Error cargando información');
    } finally {
      setMetadataLoading(false);
    }
  };

  useEffect(() => {
    checkTransmission();
    const intervalId = setInterval(checkTransmission, 30000);
    return () => clearInterval(intervalId);
  }, [currentStation]);

  useEffect(() => {
    if (isTransmitting) {
      fetchMetadata();
      const metadataInterval = setInterval(fetchMetadata, 10000);
      return () => clearInterval(metadataInterval);
    }
  }, [isTransmitting]);

  // Manejo de audio
  useEffect(() => {
    const loadSound = async () => {
      if (currentStation && isTransmitting) {
        try {
          if (sound) await sound.unloadAsync();

          const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: currentStation },
            { shouldPlay: false, volume }
          );

          setSound(newSound);
          setIsPlaying(false);
        } catch (error) {
          console.error('Error cargando audio:', error);
        }
      }
    };

    loadSound();
    return () => sound?.unloadAsync();
  }, [currentStation, isTransmitting]);

  const togglePlayPause = async () => {
    if (!sound || !isPlayButtonEnabled) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error en reproducción:', error);
    }
  };

  const switchStation = () => {
    if (!isSwitchButtonEnabled) return;

    setIsSwitchButtonEnabled(false);
    setCurrentStation(prev => prev === RADIO_URL_A ? RADIO_URL_B : RADIO_URL_A);
    setIsPlaying(false);

    setTimeout(() => setIsSwitchButtonEnabled(true), 3000);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    sound?.setVolumeAsync(value);
  };

  // Resto de tu código de interfaz...
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  const handleOpenURL = ({ url }) => {
    if (url.includes('facebook.com')) Linking.openURL(url);
    return true;
  };

  const injectedJavaScript = `
    document.addEventListener('click', function(event) {
      var target = event.target;
      while (target && target.tagName !== 'A') {
        target = target.parentNode;
      }
      if (target && target.href) {
        event.preventDefault();
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'navigation', url: target.href }));
      }
    });
    var style = document.createElement('style');
    style.innerHTML = '.share_popup_dialog { display: none !important; }';
    document.head.appendChild(style);
    true;
  `;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#000000', '#c40000']} style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../images/fondo.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </LinearGradient>

      <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />

      <View style={styles.mainContent}>
        <ScrollView style={styles.mainContent}>
          <Reproductor
            sound={sound}
            isPlaying={isPlaying}
            volume={volume}
            currentSong={currentSong}
            currentStation={currentStation}
            isTransmitting={isTransmitting}
            isPlayButtonEnabled={isPlayButtonEnabled}
            isSwitchButtonEnabled={isSwitchButtonEnabled}
            togglePlayPause={togglePlayPause}
            handleVolumeChange={handleVolumeChange}
            switchStation={switchStation}
            RADIO_URL_A={RADIO_URL_A}
          />



          <View style={styles.facebookContainer}>
            <WebView
              ref={webViewRef}
              source={{
                uri: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRadioCUCEI%2F&tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId',
              }}
              style={styles.facebookWebView}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              scalesPageToFit={true}
              onShouldStartLoadWithRequest={() => true}
              injectedJavaScript={injectedJavaScript}
              onMessage={(event) => {
                const message = JSON.parse(event.nativeEvent.data);
                if (message.type === 'navigation') {
                  handleOpenURL({ url: message.url });
                }
              }}
            />
          </View>
        </ScrollView>
      </View>
      {isMenuVisible && <View style={styles.overlay} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    zIndex: 1,
  },
  header: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  facebookContainer: {
    marginTop: 30,
    height: 650,
    width: '80%',
    borderRadius: 20,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  facebookWebView: {
    flex: 1,
    width: '330%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  songInfoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  songInfoText: {
    fontSize: 16,
    color: '#333',
  },
});