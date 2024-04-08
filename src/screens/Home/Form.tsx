import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../../themes/StylesGeneral";
import { push, ref, set } from "firebase/database";
import { dbRealTime } from "../../configs/firebaseConfig";
import { CommonActions, useNavigation } from "@react-navigation/native";
interface FichaForm {
  horas: string;
  enfoque: string;
}
export const Form = () => {
    const navigation=useNavigation();
  const [fichaForm, setfichaForm] = useState<FichaForm>({
    horas: "",
    enfoque: "",
  });
  //actualizar los valores
  const handlerSetFichaForm = (key: string, value: string ) => {
    setfichaForm({ ...fichaForm, [key]: value });
  };
  //guardra las cartas
  const handlerSaveFicha = async () => {
    if (!fichaForm.enfoque || !fichaForm.horas) {
      return;
    }
    const dbRef=ref(dbRealTime,'fichas')
    const saveFicha=push(dbRef)
    //referencia a la base de datos
    try {
        await set(saveFicha,fichaForm)
        //limpiar
      setfichaForm({
        horas: "",
        enfoque: "",
      });
      navigation.dispatch(CommonActions.goBack)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.body}>
      <Text variant="headlineSmall">¿Cuál fue tu enfoque hoy?</Text>
      <TextInput
        mode="outlined"
        label="Enfoque"
        value={fichaForm.enfoque}
        left={<TextInput.Icon icon="google-fit" />}
        onChangeText={(value) => handlerSetFichaForm("enfoque", value)}
      />
      <Text variant="headlineSmall">¿Cuántas horas le dedicaste?</Text>
      <TextInput
        mode="outlined"
        label="Horas"
        value={fichaForm.horas.toString()}
        left={<TextInput.Icon icon="timer-outline" />}
        onChangeText={(value) => handlerSetFichaForm("horas", value)}
      />
      <Button mode='contained' icon='content-save-check' onPress={()=>handlerSaveFicha()}>Guardar</Button>
      {/*<Button mode='contained' icon='delete'>Eliminar</Button>*/}
    </View>
  );
};
