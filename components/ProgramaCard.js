import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProgramaCard = ({ image, title, description, locutores, onbuttonPress }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.locutores}>{locutores}</Text>
            <TouchableOpacity style={styles.button} onPress={onbuttonPress}>
                <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    locutores: {
        fontSize: 12,
        color: '#777',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default ProgramaCard;