import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        backgroundColor:"rgb(0,0,0)"
    },
    contenedorbtn:{
        alignItems:"center",
        width:"70%",
        alignSelf:"flex-end"
    },
    containerTextRedirect:{
       
        flexDirection:'row'
    },
    cabecera:{
        alignItems:"center",
        paddingBottom:"10%"
    },
    contenedorSecuandario:{
        justifyContent:"center",
        width:"80%",
        paddingTop:"75%"
    },
    TIdatos:{
        marginBottom:10,
        backgroundColor:"rgba(220, 228, 250, 0.5)"
    },
    btnPrimario:{
       
        width:"60%"
    },
    fab: {
        backgroundColor:"#4D6E96",
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: 0,
      },
    titulos:{
        color:"#EDFADC"
    },
    textNavigator:{
        color:"#963A33",
        fontWeight:"bold"
    },
    textInfo:{
        color:"rgba(220, 228, 250, 0.5)"
    },
    
})
