import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
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
            />
            <ProgramaCard
              image={CopsijalImage}
              title="COPSJAL Radio"
              description="Este es el programa del Colegio de Profesionistas en Sistemas de Información de Jalisco."
              locutores="Locutores: Variedad."
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
            />
            <ProgramaCard
              image={EstadioCUCEImage}
              title="Estadio CUCEI"
              description="Ha llegado el lugar más deportivo del 96.7 FM, Estadio CUCEI. Estaremos hablando de todo lo que acontece en el mundo deportivo, dentro y fuera del centro universitario."
              locutores="Locutores: Variedad."
            />
            <ProgramaCard
              image={EspiralSonidoImage}
              title="Espiral Sonido"
              description="Un espacio dedicado a la búsqueda, escucha y retroalimentación de los sonidos alternativos que convergen en los nuevos panoramas musicales del presente."
              locutores="Locutor: Carlos Espinoza."
            />
            <ProgramaCard
              image={EcosUrbanosImage}
              title="Ecos Urbanos"
              description="Programa de música urbana."
              locutores="Locutor: Carlos Espinoza."
            />
            <ProgramaCard
              image={TuGadgetImage}
              title="Tu Gadget"
              description="¿Estás al tanto de lo último en tecnología? ¿Necesitas actualizarte? Actualizate aquí, en Radio CUCEI. Tu Gadget, inicia."
              locutores="Locutor: Ignacio Nache Hernández e invitados."
            />
            <ProgramaCard
              image={GeneracionY}
              title="Generación Y"
              description="Programa musical de radio que abarca toda una generación. Si creciste en los 90s... ¡QUEDATE! Esta es tu generación... Generación Y."
              locutores="Locutor: Jose Manuel Sigala"
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
              description="Programa de música variada."
              locutores="Locutor: Edgar 'Osito' Arteaga."
            />
            <ProgramaCard
              image={NotiOciosos}
              title="Noti-Ociosos"
              description="Programa de noticias."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={PirateruaSonora}
              title="Piratería Sonora"
              description="Programa de música variada."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={ReflexionesMedicas}
              title="Reflexiones Médicas"
              description="Programa de salud."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={Resbalon}
              title="Resbalón"
              description="Programa de música variada."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={VibraSound}
              title="Vibra Sound"
              description="Programa de música variada."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={TopografiaActual}
              title="Topografía Actual"
              description="Programa de música variada."
              locutores="Locutor: TBA"
            />
            <ProgramaCard
              image={PerspectivasJuridicas}
              title="Perspectivas Jurídicas"
              description="Programa de derecho."
              locutores="Locutor: TBA"
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