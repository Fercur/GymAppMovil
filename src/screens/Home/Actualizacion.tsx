import 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Ficha } from '../Home'
import { onValue, ref, remove, update } from 'firebase/database'
import { dbRealTime } from '../../configs/firebaseConfig'
import { styles } from '../../themes/StylesGeneral'
import { Button, Text, TextInput } from 'react-native-paper'

export const Actualizacion = () => {
    const navigation=useNavigation()
    const route = useRoute()
    //@ts-ignore
    const {ficha}=route.params
    const [detailForm, setdetailForm] = useState<Ficha>({
        id:"",
        enfoque:"",
        horas:""
    })
    useEffect(()=>{
        setdetailForm(ficha)
    },[])
    const handlerSetFichaForm=(key:string,value:string)=>{
        setdetailForm({...detailForm,[key]:value})
    }
    //actualiza ficha
    const handlerUpdateFicha=async()=>{
        //referencia a la base de datos
        const dbRef=ref(dbRealTime,'fichas/'+detailForm.id)
        await update(dbRef,{enfoque:detailForm.enfoque,horas:detailForm.horas})
        navigation.goBack()
    }
    const handlerDeleteFicha=async()=>{
        const dbRef=ref(dbRealTime,'fichas/'+detailForm.id)
        await remove(dbRef)
        navigation.goBack()
    }

  return (
    <View style={styles.body}>
      <Text variant="headlineSmall">¿Cuál fue tu enfoque hoy?</Text>
      <TextInput
        mode="outlined"
        label="Enfoque"
        value={detailForm.enfoque}
        left={<TextInput.Icon icon="google-fit" />}
        onChangeText={(value) => handlerSetFichaForm("enfoque", value)}
      />
      <Text variant="headlineSmall">¿Cuántas horas le dedicaste?</Text>
      <TextInput
        mode="outlined"
        label="Horas"
        value={detailForm.horas.toString()}
        left={<TextInput.Icon icon="timer-outline" />}
        onChangeText={(value) => handlerSetFichaForm("horas", value)}
      />
      <Button mode='contained' icon='content-save-check' onPress={()=>handlerUpdateFicha()}>Guardar</Button>
      <Button mode='contained' icon='delete' onPress={()=>handlerDeleteFicha()}>Eliminar</Button>
    </View>
  )
}

