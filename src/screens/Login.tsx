import React, { useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from '../themes/StylesGeneral'
import { Button, Divider, FAB, Snackbar, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

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
    
  }
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
             />
             <TextInput
                label="Password"
                style={styles.TIdatos}
                mode='outlined'
             />
        </View>
        <View>
            
            <View style={styles.containerTextRedirect}>
                <Text style={styles.textInfo}>¿No tienes una cuenta? </Text>
                <Text
                    style={styles.textNavigator}>
                    Regístrate ahora
                </Text>
            </View>
            <View style={styles.contenedorbtn}>
            <FAB              
                icon="send"
                color='#fff'
                style={styles.fab}
                onPress={() => console.log('Pressed')}
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


