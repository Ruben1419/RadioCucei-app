import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const Nosotros = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Radio CUCEI</Text>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Image
            source={require('../images/torre_tecnologico.png')}
            style={styles.image}
          />
          <Text style={styles.sectionTitle}>Un poco de historia..</Text>
          <Text style={styles.sectionText}>
          La radio universitaria en Norteamérica nace como un sistema de radiodifusión experimental. Hoy en día esta radio se presenta en más de una forma de difusión iniciando por la tradicional AM y FM llegando hasta los circuitos abiertos y cerrados que ofrecen los colegios y universidades como lo son los sistemas de cable o redes universitarias. Radio CUCEI es una radio universitaria y experimental. Hablar de la radiodifusión universitaria en México nos lleva invariablemente a reconocer los múltiples esfuerzos que se han realizado desde los años 30's, cuando nació la primera radiodifusora universitaria: Radio Universidad Nacional, emisora de la Universidad Nacional Autónoma de México el lunes 14 de junio de 1937.
          Entre tanto, el 30 de Mayo de 1974 entre los jardines y edificios del antes Instituto Tecnológico de la Universidad de Guadalajara, ahora mejor conocido como CUCEI, el Ing. José del Río Madrigal montó la primer antena y equipo transmisor que marcarían el nacimiento del proyecto Radio UDG en la frecuencia de 104.3MHz.
          Así, la Universidad de Guadalajara se convirtió en pionera en materia de radiodifusion universitaria en el occidente del país y apostó por la comunicación radiofónica como el medio para transmitir el trabajo universitario a través de proyectos de difusión del conocimiento, de la cultura y del entretenimiento inteligente.
          Años más tarde, después de que esta estación se mudara a las oficinas del edificio administrativo, surgió en algunos académicos y alumnos la idea de formar una nueva estación de radio dentro de las instalaciones del laboratorio de electrónica con el propósito de generar un nuevo espacio para la experimentación en materia de telecomunicaciones.
          </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Radio CUCEI, hoy...</Text>
          <Text style={styles.sectionText}>
          Actualmente el módulo N cuenta con un laboratorio de audio y acústica compuesto por una cabina acondicionada acústicamente, un área de controles para el audio y un equipo radiotransmisor de FM que opera en banda comercial. Estos elementos con los que cuenta la estación constituyen lo básico necesario para la generación y transmisión de contenidos por radio FM a nivel local limitadas al área de CUCEI.
          Con el proyecto de una estación de radio, utilizando el laboratorio de audio y acústica y el equipo transmisor de FM, además de realizar prácticas en las materias de comunicaciones, servirá para cubrir las necesidades de comunicación de los diferentes sucesos que acontecen en nuestro centro universitario y casa de estudios, como lo son eventos, actividades culturales y de entretenimiento (DIVEC FEST, Talento C.U.C.E.I. o las muchas semanas temáticas que llegan hasta nosotros). De esta forma el contenido de la programación de la radiodifusora está basado en 3 puntos de vital importancia para la formación e información, recreación y esparcimiento que permitirán imaginar, crear y reflexionar en torno a nuestra realidad: Ciencia, Cultura, Información y Entretenimiento.
          Este contenido estará cubierto por diferentes alumnos voluntarios, prestadores de servicio social e incluso académicos y administrativos, que deseén participar en la programación, locución o dentro del equipo técnico.
          </Text>
          <Image
            source={require('../images/controles.jpg')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Misión</Text>
          <Text style={styles.sectionText}>
          - Llevar a la comunidad del Centro Universitario de Ciencias Exactas e Ingenierías la información de ciencia, cultura y entretenimiento a través del sistema de radio FM instalada en el laboratorio de Audio y Acústica del Módulo N y por el sistema de broadcasting vía IP.{"\n"}
          - Facilitar la conexión del auditorio con la información que se origine de los diferentes sucesos científicos, académicos, culturales y de entretenimiento que acontecen en nuestro centro universitario y nuestra universidad evitando lucrar ni politizar los contenidos permaneciendo neutros y objetivos.{"\n"}
          - Fortalecer el proyecto con el apoyo del personal docente, el alumnado y la administración tanto de la división de Electrónica y Computación como del mismo Centro Universitario de Ciencias Exactas e Ingenierías.{"\n"}
          - Incluir a alumnos del Centro Universitario de Ciencias Exactas e Ingenierías e invitados de otros centros universitarios para realizar los roles de programación, locución y equipo técnico.{"\n"}
          - Balancear los contenidos de los programas de entretenimiento, ciencia, cultura y de información de acuerdo a la demanda dada por la comunidad del Centro Universitario de Ciencias Exactas e Ingenierías.{"\n"}
          - Experimentar los distintos modos y tecnologías de transmisión de señal auditiva utilizando las instalaciones del sistema de radio FM en forma conjunta con los demás proyectos de radio comunicaciones y el laboratorio de Audio y Acústica.{"\n"}
          - Realizar prácticas donde los propios alumnos podrán ver aplicados los conocimientos teóricos vistos en sus materias relacionadas con las comunicaciones vía radiofrecuencia y vía internet.
          </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visión</Text>
          <Text style={styles.sectionText}>
          Llegar a ser uno de los principales medios de difusión de ciencia, cultura, información y entretenimiento en toda el área comprendida por CUCEI por medio de las transmisiones de programas de radio en la banda de FM comercial.
          </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos</Text>
          <Text style={styles.sectionText}>
          - Llevar a la comunidad del Centro Universitario de Ciencias Exactas e Ingenierías la información de ciencia, cultura y entretenimiento a través del sistema de radio FM instalada en el laboratorio de Audio y Acústica del Módulo N y por el sistema de broadcasting vía IP.
            - Facilitar la conexión del auditorio con la información que se origine de los diferentes sucesos científicos, académicos, culturales y de entretenimiento que acontecen en nuestro centro universitario y nuestra universidad evitando lucrar ni politizar los contenidos permaneciendo neutros y objetivos.
            - Fortalecer el proyecto con el apoyo del personal docente, el alumnado y la administración tanto de la división de Electrónica y Computación como del mismo Centro Universitario de Ciencias Exactas e Ingenierías.
            - Incluir a alumnos del Centro Universitario de Ciencias Exactas e Ingenierías e invitados de otros centros universitarios para realizar los roles de programación, locución y equipo técnico.
            - Balancear los contenidos de los programas de entretenimiento, ciencia, cultura y de información de acuerdo a la demanda dada por la comunidad del Centro Universitario de Ciencias Exactas e Ingenierías.
            - Experimentar los distintos modos y tecnologías de transmisión de señal auditiva utilizando las instalaciones del sistema de radio FM en forma conjunta con los demás proyectos de radio comunicaciones y el laboratorio de Audio y Acústica.
            - Realizar prácticas donde los propios alumnos podrán ver aplicados los conocimientos teóricos vistos en sus materias relacionadas con las comunicaciones vía radiofrecuencia y vía internet.
          </Text>
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default Nosotros;
