import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProgramaCard = ({ image, title, description, locutores }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.locutores}>{locutores}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: 150, // Ajusta el ancho de la tarjeta
    justifyContent: 'space-between',
  },
  image: {
    width: 60, // Ajusta el ancho de la imagen
    height: 60, // Ajusta la altura de la imagen
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14, // Ajusta el tamaño de la fuente del título
    fontWeight: 'bold',
    marginTop: 4,
  },
  description: {
    fontSize: 10, // Ajusta el tamaño de la fuente de la descripción
    textAlign: 'center',
    marginTop: 4,
  },
  locutores: {
    fontSize: 10, // Ajusta el tamaño de la fuente de los locutores
    color: '#888',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 8,
    alignContent: 'bottom',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ProgramaCard;