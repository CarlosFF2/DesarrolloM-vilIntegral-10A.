import { Avatar, Button, Card, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../styles/login'
import { useNavigation } from '@react-navigation/native';

const Register = () =>  {

  const navigation = useNavigation(); // Obtiene la instancia de navegación
  const navigateToRegistro = () => {
    navigation.navigate('Login'); // Navega a la pantalla de Registro
  };

  return(
    <View style={styles.container}>

        <Card style= {styles.card}>
          <Card.Cover style= {styles.image}
          source={{ uri: 'https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg' }} />

          <Card.Content>
          <Text style= {styles.title} variant="titleLarge">Registrate</Text>

          <TextInput style= {styles.inputs}
          label="Name"
          />
          <TextInput style= {styles.inputs}
          label="Email"
          />
          <TextInput  style= {styles.inputs}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          />

          <TextInput  style= {styles.inputs}
          label="Confrim Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          />
          </Card.Content>

          <Button style= {styles.button}
          icon="send" mode="contained">
          Registrarme
          </Button>

            <View>
              <TouchableOpacity onPress={navigateToRegistro}>
               <Text style= {styles.text}>
                O Inicia Sesion 
              </Text>
               </TouchableOpacity>
            </View>

        </Card>

    </View>
  );
} 
export default Register;