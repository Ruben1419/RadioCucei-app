import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';

const Contacto = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:radio.cucei@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+523313785900');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/RadioCUCEI');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://twitter.com/RadioCUCEI');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/RadioCUCEI');
  };

  const handleMapsPress = () => {
    Linking.openURL('https://www.google.com/maps/place/Radio+CUCEI+96.7MHz/@20.6554754,-103.3269797,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b2253c4dbe11:0x7a63d3a531be5f5b!8m2!3d20.6554703!4d-103.3244048!16s%2Fg%2F11c5q4zv7d?entry=ttu');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacto</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../images/croquis.png')} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Laboratorio de Audio y Acústica</Text>
          <Text style={styles.sectionText}>Módulo N planta alta</Text>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text style={styles.linkText}>Teléfono: (33) 1378-5900 Ext. 27712</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={styles.linkText}>E-mail: radio.cucei@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ubicación</Text>
           <Text style={styles.sectionText}>
             CUCEI{"\n"}
              Centro Universitario de Ciencias Exactas e Ingenierías
              Blvd. Marcelino García Barragán #1421, esq. Calz. Olímpica
              C.P. 44430
              Guadalajara, Jalisco, México.{"\n"}
          </Text>
          <TouchableOpacity onPress={handleMapsPress}>
            <Text style={styles.linkText}>Abrir en Google Maps</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¡Síguenos en redes sociales!</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={handleFacebookPress}>
              <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTwitterPress}>
              <Image source={require('../images/x.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleInstagramPress}>
              <Image source={require('../images/insta.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '90%',
    height: 300, 
    resizeMode: 'contain',
  },
  sectionContainer: {
    padding: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    marginTop: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default Contacto;