import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from '../themes/StylesGeneral'
import { Button, Divider, FAB, Snackbar, Text, TextInput } from 'react-native-paper'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configs/firebaseConfig'

interface MessageSnackBar{
  visible: boolean,
  message: string,
  color: string
}
interface LoginForm{
  email:string,
  password:string
}
export const Login = () => {
  //mostrar la contraseña
  const [hiddenPassword, sethiddenPassword] = useState(true)
  //navegacion
  const navigation=useNavigation()

  const [loginForm, setloginForm] = useState({
    email:"",
    password:""
  })
  //useState mesajes dinamicos
  const [messageSnackBar, setmessageSnackBar] = useState<MessageSnackBar>({
    visible:false,
    message:"",
    color:"#ffffff"
  })

  //Validacion
  const handlerLogIn=async()=>{
    if(!loginForm.email  || !loginForm.password){
      //estado visualizacion del mensaje
      setmessageSnackBar({visible:true,message:"Complete todos los campos",color:"#962841"});
      return;
    }
    //Login usuarios
    try{
      const response=await signInWithEmailAndPassword(
        auth,loginForm.email,loginForm.password
      );
      console.log(response)
    }catch(e){
      console.log(e);
      setmessageSnackBar({visible:true,message:"Nose se logró completar el ingreso intenter más tarde",color:"#962841"});
    }
  }
  const handlerSetLoginForm=(key:string,value:string)=>{
    setloginForm({...loginForm,[key]:value})
  };
  return (
    <ImageBackground
    source={require('../img/BackgroundStart.jpg')}
    style={styles.contenedor}
  >
   <View style={styles.contenedorSecuandario}>
        
        <Text variant="headlineMedium" style={styles.titulos}>Log In</Text>

        <View>
            <TextInput
                label="Email"
                style={styles.TIdatos}
                mode='outlined'
                onChangeText={(value)=>handlerSetLoginForm('email',value)}
             />
             <TextInput
                label="Password"
                style={styles.TIdatos}
                mode='outlined'
                secureTextEntry={hiddenPassword}
                left={<TextInput.Icon icon="eye" onPress={()=>!hiddenPassword} />}
                onChangeText={(value)=>handlerSetLoginForm('password',value)}
             />
        </View>
        <View>
            
            <View style={styles.containerTextRedirect}>
                <Text style={styles.textInfo}>¿No tienes una cuenta? </Text>
                <Text
                    style={styles.textNavigator}
                    onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Registro'}))}>
                    Regístrate ahora
                </Text>
            </View>
            <View style={styles.contenedorbtn}>
            <FAB              
                icon="send"
                color='#fff'
                style={styles.fab}
                onPress={() => handlerLogIn()}
                mode='elevated'
            />
            </View>
            <Snackbar
              visible={messageSnackBar.visible}
              onDismiss={()=>setmessageSnackBar({...messageSnackBar,visible:false})}
              style={{backgroundColor:messageSnackBar.color}}>
                {messageSnackBar.message}
              </Snackbar>

        </View>
        
     </View>
   </ImageBackground>
  )
}


