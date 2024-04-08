import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, Button, Divider, FAB, Icon, IconButton, Modal, Portal, Text, TextInput } from "react-native-paper";
import { styles } from "../themes/StylesGeneral";
import { Cards } from "./Home/Cards";
import { CommonActions, useNavigation } from "@react-navigation/native";
import firebase, { updateProfile } from "firebase/auth";
import { auth, dbRealTime } from "../configs/firebaseConfig";
import { onValue, ref } from "firebase/database";

interface UserData{
  name:string,
  estatura:string,
  peso:string,
  morfologia:string
}
export interface Ficha{
  id:string,
  horas:string,
  enfoque:string
}


export const Home = () => {
  const navigation=useNavigation()
  //permite trabajar con los datos del usuario
  const [userData, setuserData] = useState<UserData>({
    name:"",
    estatura:"",
    peso:"",
    morfologia:""
  })
  //Controlar la visibilidad del modal user
  const [showModalProfile, setshowModalProfile] = useState(false)

  //hook
  const [userAuth, setuserAuth] = useState<firebase.User | null>(null);
  //Hook useState tomar lista de cartas
const [fichas, setfichas] = useState<Ficha[]>([]);
//captar la data del usuario logeado
useEffect(()=>{
  setuserAuth(auth.currentUser);
  setuserData({name:auth.currentUser?.displayName ?? "",estatura:auth.currentUser?.displayName ?? "",peso:auth.currentUser?.displayName ?? "",morfologia:auth.currentUser?.displayName ?? ""});
  getAllFichas();
},[]);
//tomar los datos del formulario y actualizar la data
const handlerUpdateUserForm=(key:string,value:string)=>{
  setuserData({...userData,[key]:value})
}
const handlerUpdateUser=async()=>{
  try{
    await updateProfile(userAuth!,{displayName:userData.name}),
    updateProfile(userAuth!,{displayName:userData.estatura}),
    updateProfile(userAuth!,{displayName:userData.peso}),
    updateProfile(userAuth!,{displayName:userData.morfologia})
  }catch(e){
    console.log(e)
  }
  setshowModalProfile(false)
}

//funcion obtener fichas almacenadas
const getAllFichas=()=>{
  const dbRef=ref(dbRealTime,"fichas");
  onValue(dbRef,(snapshot)=>{
    const data=snapshot.val();
    const getKeys=Object.keys(data);
    const listFichas:Ficha[]=[];
    getKeys.forEach((key)=>{
      const value={...data[key],id:key};
      listFichas.push(value);
    });
    setfichas(listFichas);
  });
};
//funcion logOut
const handleLogout=async()=>{
  try {
    await auth.signOut(); // Esta función realiza el logout

  } catch (error) {
    console.error("Error al hacer logout:", error);
  }
} 
 

  return (
    <>
      <View style={styles.CabeceraHome}>
        <Avatar.Icon size={90} icon="human-greeting-variant" style={styles.userIcon}/>
        <View style={styles.containerTextRedirect}>
          <Text variant="labelLarge">{userData.name}</Text>
          <IconButton
            icon="cog"
            size={20}
            mode="contained"
            iconColor="#963A33"
            onPress={() => setshowModalProfile(true)}
          />
          <IconButton
            icon="logout"
            size={20}
            mode="contained"
            iconColor="#963A33"
            onPress={handleLogout}
          />
        </View>

        <View style={styles.enLinea}>
          <View style={styles.cabecera}>
            <Text variant="bodyLarge">{userData.estatura} cm</Text>
            <Text variant="labelLarge">Estatura</Text>
          </View>
          <View style={styles.cabecera}>
            <Text variant="bodyLarge">{userData.peso} kg</Text>
            <Text variant="labelLarge">Peso</Text>
          </View>
        </View>
        <Text variant="titleLarge">Morfología:</Text>
        
        <Text variant="bodyMedium">{userData.morfologia}</Text>
      </View>
      <View style={styles.body}>
        <Text variant="headlineMedium">Fichas</Text>
        <FlatList
          data={fichas}
          renderItem={({item})=><Cards ficha={item}/>}
          keyExtractor={(item)=>item.id}
          />
          <FAB              
                icon="plus"
                color='#fff'
                style={styles.fab}
                onPress={() => navigation.dispatch(CommonActions.navigate({name:'Formulario'}))}
                mode='elevated'
            />
      </View>

      {/*modal pop up */}
      <Portal>
        <Modal visible={showModalProfile} contentContainerStyle={styles.modal}>
          <View style={styles.headerModal}>
            <Text variant='headlineLarge'>Mi Perfil</Text>
            <IconButton icon='close' onPress={() => setshowModalProfile(false)} />
          </View>
          <Divider bold />
          <View>
            <TextInput
              mode='outlined'
              label='Nombre'
              value={userData.name}
              onChangeText={(value) => handlerUpdateUserForm('name', value)}
            />
            <TextInput
              mode='outlined'
              label='Estatura'
              value={userData.estatura}
              onChangeText={(value) => handlerUpdateUserForm('estatura', value)}
            />
            <TextInput
              mode='outlined'
              label='Peso'
              value={userData.peso}
              onChangeText={(value) => handlerUpdateUserForm('peso', value)}
            />
            <TextInput
              mode='outlined'
              label='Morfología'
              value={userData.morfologia}
              onChangeText={(value) => handlerUpdateUserForm('morfologia', value)}
            />
          </View>
          <Button mode='contained' onPress={() => handlerUpdateUser()}>Actualizar</Button>
        </Modal>
      </Portal>
    </>
  );
};
