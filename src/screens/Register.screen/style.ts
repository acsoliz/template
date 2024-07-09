import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  formContainer: {
    // Eliminamos propiedades obsoletas
    border: 'groove',
    backgroundColor: '#dbe9f7',
    marginBottom: 50,

    display: 'flex', // Activamos flexbox
    flexDirection: 'column', // Dirección horizontal
    justifyContent: 'space-around', // Distribución con máximo espacio
    // alignItems: 'stretch', // Extensión vertical
    flex: 1, // Ocupación del espacio disponible
    paddingHorizontal: 30, // Padding horizontal
    height: 600, // Altura del contenedor
  },
  title: {
    //border: 'groove', //TODO delete
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  inputField: {
    // elevation: 5, // Esto añade una sombra en Android
    // shadowColor: '#000', // Esto añade una sombra en iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    // width: '30rem',
    // margin: 'auto',
    padding: 16,
    // border: '1px solid #ccc',
    borderRadius: 8,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
