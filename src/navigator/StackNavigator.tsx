/*import React, { useEffect, useState } from 'react'
import { Login } from '../screens/Login'
import { Registro } from '../screens/Registro'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';

//Propiedades de las rutas 
interface Routes{
    name:string,
    screen:()=>JSX.Element
    headerShow?:boolean
}
const Stack=createStackNavigator()
const StackNavigator = () => {
    //controlar la carga inicial de screens
    const [isLoading, setisLoading] = useState(false)
    //verificar si se encuentra logeado
    const [isAuth, setisAuth] = useState(false)
    useEffect(()=>{
        setisLoading(true)
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setisAuth(true)
            }
            setisLoading(false)
        })
    },[])
    //rutas para el usuario que no esta autenticado
    const routeNoAuth:Routes[]=[
        {name:"Login",screen:Login},
        {name:"Registro",screen:Registro}
    ]
    //rutas para el usuario que esta autenticado
    const routeAuth:Routes[]=[

    ]
  return (
    <>
    {
        isLoading ?
        (<View>
            <ActivityIndicator size={35}/>
        </View>):
        (<Stack.Navigator>
            {
                !isAuth?
                routeNoAuth.map((item,index)=>(
                    <Stack.Screen key={index} name={item.name} options={{headerShown:item.headerShow ?? true}} component={item.screen}/>
                ))
                :
                routeAuth.map((item,index)=>(
                    <Stack.Screen key={index} name={item.name} options={{headerShown: item.headerShow ?? true}} component={item.screen} />
                ))
            }
        </Stack.Navigator>)
    }
    </>
  );
}

export default StackNavigator*/
