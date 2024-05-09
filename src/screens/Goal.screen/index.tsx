/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StackScreenProps } from '@react-navigation/stack';
import { GoalsStackParams } from '../../navigator/GoalsNavigator';
import { useCategories } from '../../hooks/useCategories';
import { useForm } from '../../hooks/useForm';
import { GoalsContext } from '../../context/GoalsContext';

interface Props extends StackScreenProps<GoalsStackParams, 'GoalScreen'> { }

export const GoalScreen = ({ navigation, route }: Props) => {

  const { id = '', name = '' } = route.params;

  const [tempUri, setTempUri] = useState<string>();

  const { categories } = useCategories();

  const { loadGoalById, addGoal, updateGoal, uploadImage, } = useContext(GoalsContext);

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
    type: '',
    title: '',
    description: '',
    difficulty: 0,
    status: '',

  })

  useEffect(() => {
    navigation.setOptions({
      title: (nombre) ? nombre : 'New Goal',
    });
  }, [nombre]);

  useEffect(() => {
    loadGoal();
    // TODO aqui se debe obtener el id del usuario

    //ESTO SE COMENTA PARA PRUEBAS
  }, []);

  const loadGoal = async () => {
    if (id.length === 0) return;
    const goal = await loadGoalById(id);
    console.log('goal::::', goal);
    console.log('goalObj::::', {
      _id: id,
      //categoriaId: goal.categoria._id,
      //img: goal.img || '',
      nombre,
    });
    setFormValue({
      _id: id,
      categoriaId: '',
      img: '',
      nombre,
      type: goal.type,
      title: goal.title,
      description: goal.description,
      difficulty: goal.difficulty,
      status: goal.status,

    });
  };

  const saveOrUpdate = async () => {
    if (id.length > 0) {
      updateGoal(categoriaId, nombre, id);

    } else {
      const tempCategoriaId = categoriaId || categories[0]._id;
      const newGoal = await addGoal(tempCategoriaId, nombre);
      onChange(newGoal._id, '_id');
    }
  };

  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
      quality: 0.5,
    }, (resp) => {
      if (resp.didCancel) return;
      if (!resp.assets?.[0].uri) return;
      setTempUri(resp.assets?.[0].uri);
      uploadImage(resp, _id);
    });
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    }, (resp) => {
      if (resp.didCancel) return;
      if (!resp.assets?.[0].uri) return;
      setTempUri(resp.assets?.[0].uri);
      uploadImage(resp, _id);
    });
  };

  /*
    {
      "title": "cuarto goal",
      "owner": "6618291c92357220dffb87b3",
      "description": "esto es una cuarto descripcion4",
      "type": "goal",
      "difficulty": 2,
      "status": "new",
      "dates": {}
    }
  */

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          placeholder="Titulo"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          placeholder="Description"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        <Text style={styles.label}>Type:</Text>
        <TextInput
          placeholder="Goal"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        <Text style={styles.label}>Dificulty:</Text>
        <TextInput
          placeholder="Goal"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />

        {/* {
        <Text style={styles.label}>Description:</Text>
        <TextInput
          placeholder="Goal"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, 'nombre')}
        />
        {/* {
    "title": "Gimnasio",
    "owner": "6621a154c29d702f41384ed2",
    "description": "esto es una cuarto descripcion4",
    "type": "sport",
    "difficulty": 2,
    "status": "new",
    "dates": {}
} */}

        {/* <Text style={styles.label}>Categoría</Text>

        <TextInput
          placeholder="Salud" //deberia ser un picker y las opciones son salud, economia, educacion, ocio, social
          style={styles.textInput}
          // value={categoria}
          onChangeText={(value) => onChange(value, 'nombre')}
        /> */}
        {/* 
        <Picker
          selectedValue={categoriaId}
          onValueChange={(value) => onChange(value, 'categoriaId')}
        >
          {
            categories.map(c => (
              <Picker.Item
                label={c.nombre}
                value={c._id}
                key={c._id}
              />
            ))
          }
        </Picker> */}

        <Button
          title="Guardar"
          onPress={saveOrUpdate}
          color="#5856D6"
        />

        {
          (_id.length > 0) && (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
              <Button
                title="Cámara"
                onPress={takePhoto}
                color="#5856D6"
              />

              <View style={{ width: 10 }} />

              <Button
                title="Galería"
                onPress={takePhotoFromGallery}
                color="#5856D6"
              />
            </View>
          )
        }

        {
          (img.length > 0 && !tempUri) && (
            <Image
              source={{ uri: img }}
              style={{
                marginTop: 20,
                width: '100%',
                height: 300,
              }}
            />
          )
        }

        {
          (tempUri) && (
            <Image
              source={{ uri: tempUri }}
              style={{
                marginTop: 20,
                width: '100%',
                height: 300,
              }}
            />
          )
        }

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 10,
  },
});
