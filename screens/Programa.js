import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking // Importa Linking para abrir enlaces
} from 'react-native';
import ProgramaCard from '../components/ProgramaCard';

// Importa las imágenes desde la carpeta assets
import ConspiranoicosImage from '../assets/Conspiranoicos.png';
import CopsijalImage from '../assets/Copsijal.png';
import CorazonesRotosImage from '../assets/CorazonesRotos.png';
import DistorsionImage from '../assets/Distorsion.png';
import EstadioCUCEImage from '../assets/EstadioCUCE.jpg';
import EspiralSonidoImage from '../assets/EspiralSonido.png';
import EcosUrbanosImage from '../assets/EcosUrbanos.png';
import TuGadgetImage from '../assets/TuGadget.png';
import GeneracionY from '../assets/GeneracionY.png';
import IndieSecretos from '../assets/IndieSecretos.jpg';
import Licuadora from '../assets/Licuadora.jpg';
import NotiOciosos from '../assets/NotiOciosos.png';
import PirateruaSonora from '../assets/PirateriaSonora.png';
import ReflexionesMedicas from '../assets/ReflexionesMedicas.png';
import Resbalon from '../assets/Resbalon.jpg';
import VibraSound from '../assets/VibraSound.jpg';
import TopografiaActual from '../assets/TopografiaActual.png';
import PerspectivasJuridicas from '../assets/PerspectivasJuridicas.jpg';
import HorarioRadio from '../assets/HorarioRadio.png';

const Programa = () => {
    const handleConspiranoicosPress = () => {
        Linking.openURL('https://www.facebook.com/Conspiranoicos/'); // Abre el enlace de Facebook
    };

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Programación</Text>
        </View>
        
        <View style={styles.schedule}>
          <Text style={styles.scheduleText}>Horario</Text>
          <View style={styles.imageContainer}>
            <Image source={HorarioRadio} style={styles.horarioImage} />
          </View>
        </View>
        
        <Text style={styles.programListText}>Lista de programas</Text>
        
        <View style={styles.programListContainer}>
          <View style={styles.programList}>
            {/* Tarjetas de programas */}
            <ProgramaCard
              image={ConspiranoicosImage}
              title="Conspiranoicos"
              description="Aquí los temas más serios son abordados de la manera más bizarra, no aprenderás nada pero seguro tendrás ganas de dar tu opinión."
              locutores="Locutores: Ivan Venegas Lozano y Joel Chávez."
              onbuttonPress={handleConspiranoicosPress} // Asigna la función al botón
            />
            <ProgramaCard
              image={CopsijalImage}
              title="COPSJAL Radio"
              description="Este es el programa del Colegio de Profesionistas en Sistemas de Información de Jalisco."
              locutores="Locutores: Variedad."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/copsijal/')} // Abre el enlace de Facebook
            
            />
            <ProgramaCard
              image={CorazonesRotosImage}
              title="Corazones Rotos"
              description="Es un programa de la Unidad de Apoyo Psicológico de CUCEI, se transmitirá todos los lunes a la 1 PM por Radio CUCEI."
              locutores="Locutora: Lic. Edith."
              
            />
            <ProgramaCard
              image={DistorsionImage}
              title="Distorsión"
              description="La distorsión, las cuerdas, y el talento de toda una era se ven reflejados. Esto es distorsión."
              locutores="Locutores: Manny 'El Albino' Morales y Edgar 'Osito' Arteaga."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/people/Zona-Random-Podcast/100063590450269/#')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={EstadioCUCEImage}
              title="Estadio CUCEI"
              description="Ha llegado el lugar más deportivo del 96.7 FM, Estadio CUCEI. Estaremos hablando de todo lo que acontece en el mundo deportivo, dentro y fuera del centro universitario."
              locutores="Locutores: Variedad."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/Estadio.RadioCUCEI/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={EspiralSonidoImage}
              title="Espiral Sonido"
              description="Un espacio dedicado a la búsqueda, escucha y retroalimentación de los sonidos alternativos que convergen en los nuevos panoramas musicales del presente."
              locutores="Locutor: Carlos Espinoza."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/La-Espiral-del-Sonido-624674264303647/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={EcosUrbanosImage}
              title="Ecos Urbanos"
              description="Programa con el propósito de conversar y analizar temas relevantes que influyen en la población de nuestra ciudad."
              locutores="Locutor: Vicente Ortiz y Edgar Camarena"
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/ProgramaEcosUrbanos/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={TuGadgetImage}
              title="Tu Gadget"
              description="¿Estás al tanto de lo último en tecnología? ¿Necesitas actualizarte? Actualizate aquí, en Radio CUCEI. Tu Gadget, inicia."
              locutores="Locutor: Ignacio Nache Hernández e invitados."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/TuGadgett/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={GeneracionY}
              title="Generación Y"
              description="Programa musical de radio que abarca toda una generación. Si creciste en los 90s... ¡QUEDATE! Esta es tu generación... Generación Y."
              locutores="Locutor: Jose Manuel Sigala"
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/Generacion.Y.radio/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={IndieSecretos}
              title="Indie Secretos"
              description="Programa donde se tocan... temas importantes de índole musical de la escena independiente."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={Licuadora}
              title="La Licuadora"
              description="En La Licuadora no hacemos distinción de géneros músicales."
              locutores="Locutor: Edgar 'Osito' Arteaga."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/LaLicuadoraRadioCUCEI/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={NotiOciosos}
              title="Noti-Ociosos"
              description="Programa de radio en donde hablamos de noticias, deportes, cultura, ocio y todo lo que te interesa (y lo que no también)."
              locutores="Locutor: Pepe Potter, Manny El Albino Morales y Diana La emperatriz."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/people/Noti-ociosos/100070335390105/#')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={PirateruaSonora}
              title="Piratería Sonora"
              description="Programa de radio por Internet relacionado a todo el arte, cine, música, recomendaciones, etc."
              locutores="Locutor: Anibal Lucas Arias."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/PirateriaSonora/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={ReflexionesMedicas}
              title="Reflexiones Médicas"
              description="Programa dedicado a resolver dudas y preocupaciones de las personas tanto del ambiente médico, como del social"
              locutores="Locutor: Hortencia Robles."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/ReflexionesMedicasCUCEI/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={Resbalon}
              title="Resbalón"
              description="Temas diversos donde se hablará de; agenda académica, académicos, horarios de clase, lugares de interés para estudiantes cerca de CUCEI, entre otros."
              locutores="Locutor: Palos y Kevin."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/ElResbalonDeCUCEI/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={VibraSound}
              title="Vibra Sound"
              description="¿Buscas nuevas alternativas musicales? Escúchanos todos los miércoles de 7-8 Pm por: Radio CUCEI.
              Te traemos lo mejor de la música independiente, y lo más nuevo de la escena musical."
              locutores="Locutor:  Alberto Hernández, Valentín Flores y Christian Quintero."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/vibrasound.RC.udg/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={TopografiaActual}
              title="Topografía Actual"
              description="Programa de música variada."
              locutores="Locutor: TBA"
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/topografia.actual/')} // Abre el enlace de Facebook
            />
            <ProgramaCard
              image={PerspectivasJuridicas}
              title="Perspectivas Jurídicas"
              description="Programa de opinión, cultura. No te lo pierdas, por el 96.7 FM Radio CUCEI"
              locutores="Locutor: Rodolfo Guerrero Martínez e invitados."
              onbuttonPress={() => Linking.openURL('https://www.facebook.com/PerspectivasJur/')} // Abre el enlace de Facebook
            />
          </View>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
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
  schedule: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 10,
  },
  horarioImage: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
  },
  scheduleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  programListText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    padding: 10,
  },
  programListContainer: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: 10,
  },
  programList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  }
});

export default Programa;