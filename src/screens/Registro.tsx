import React, { useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from '../themes/StylesGeneral'
import { Button, Divider, FAB, Snackbar, Text, TextInput } from 'react-native-paper'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/firebaseConfig'

interface RegisterForm{
    email:string,
    password:string
}
interface MessageSnackBar{
    visible: boolean,
    message: string,
    color: string
}

export const Registro = () => {
    //mostrar la contraseña
    const [hiddenPassword, sethiddenPassword] = useState(true)
    //navegacion
    const navigation=useNavigation()
    //pemrite trabajar con el estado del formulario
    const [registerForm, setregisterForm] = useState<RegisterForm>({
        email:"",
        password:""
    })
    //trabajar con el manejo de mensaje dinamico
    const [messageSnackBar, setmessageSnackBar] = useState<MessageSnackBar>({
        visible:false,
        message:"",
        color:"#ffffff"
    })
    //funcion para actualizar datos del formulario
    const handlerSetRegisterForm=(key:string,value:string)=>{
        setregisterForm({...registerForm,[key]:value})
    };
    //funcion para tomar los datos del registro 
    const handlerRegister=async()=>{
        if(!registerForm.email || !registerForm.password){
            setmessageSnackBar({visible:true,message:"Complete todos los campos",color:"#962841"})
            return;
        }
        //Registrar usuarios
        try{
            const response=await createUserWithEmailAndPassword(
                auth,registerForm.email,registerForm.password
            );
            console.log(response)
            setmessageSnackBar({visible:true,message:"Registro exitoso",color:"#246317"})
        }catch(e){
            console.log(e);
            setmessageSnackBar({visible:true,message:"no se logró completar el regustro intente más tarde",color:"#962841"})
        }
    }
  return (
    <ImageBackground
    source={require('../img/BackgroundStart.jpg')}
    style={styles.contenedor}
  >
   <View style={styles.contenedorSecuandario}>
        
        <Text variant="headlineMedium" style={styles.titulos}>Registro</Text>

        <View>
            <TextInput
                label="Email"
                style={styles.TIdatos}
                mode='outlined'
                onChangeText={(value)=>handlerSetRegisterForm("email",value)}
             />
             <TextInput
                label="Password"
                style={styles.TIdatos}
                mode='outlined'
                onChangeText={(value)=>handlerSetRegisterForm("password",value)}
             />
        </View>
        <View>
            
            <View style={styles.containerTextRedirect}>
                <Text style={styles.textInfo}>¿Ya eres miembro? </Text>
                <Text
                    style={styles.textNavigator}
                    onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Login'}))}>
                    Inicia Sesión
                </Text>
            </View>
            <View style={styles.contenedorbtn}>
            <FAB              
                icon="send"
                color='#fff'
                style={styles.fab}
                onPress={() => handlerRegister()}
                mode='elevated'
            />
            </View>
            
        </View>
        <Snackbar
        visible={messageSnackBar.visible}
        onDismiss={()=>setmessageSnackBar({...messageSnackBar,visible:false})}
        style={{backgroundColor:messageSnackBar.color}}>
          {messageSnackBar.message}
      </Snackbar>
        
     </View>
   </ImageBackground>
  )
}


