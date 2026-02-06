import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.iconBox}>
        <Feather name="book" size={28} color="#7B2CF6" />
      </View>

      <Text style={styles.title}>Bem-vindo de volta</Text>
      <Text style={styles.subtitle}>Acesse sua conta do SENAI</Text>

      <View style={styles.inputContainer}>
        <Feather name="mail" size={18} color="#999" />
        <TextInput
          placeholder="seu@email.com"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={18} color="#999" />
        <TextInput
          placeholder="********"
          style={styles.input}
          secureTextEntry
        />
        <Feather name="eye" size={18} color="#999" />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
        <Feather name="arrow-right" size={18} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.or}>Ou entre com</Text>

      <View style={styles.socialContainer}>
        <View style={styles.socialIcon} />
        <View style={styles.socialIcon} />
        <View style={styles.socialIcon} />
      </View>

      <Text style={styles.signup}>
        Não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  iconBox: {
    alignSelf: 'center',
    backgroundColor: '#F3E8FF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  forgot: {
    color: '#7B2CF6',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#7B2CF6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    marginRight: 8,
  },
  or: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 18,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#eee',
    marginHorizontal: 8,
  },
  signup: {
    textAlign: 'center',
    marginTop: 18,
    color: '#666',
  },
  signupLink: {
    color: '#7B2CF6',
    fontWeight: '700',
  },
});