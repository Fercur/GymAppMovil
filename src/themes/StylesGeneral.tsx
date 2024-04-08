import { StyleSheet } from "react-native";
export const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        backgroundColor:"rgb(0,0,0)"
    },
    CabeceraHome:{
      flex:1,
      alignItems:"center",
      gap:10,
    },
    contenedorbtn:{
        alignItems:"center",
        width:"70%",
        alignSelf:"flex-end"
    },
    containerTextRedirect:{
        flexDirection:'row',
        alignItems:"center"
    },
    enLinea:{
        flexDirection: 'row',
        marginTop: -15,  // Ajuste negativo para superponerse ligeramente al nombre de usuario
        width: '80%',
        justifyContent:"center"
    },
    card:{
        flexDirection: 'row',
        paddingBottom:"5%",
        alignItems:"center",
        marginHorizontal:'10%'
    },
    cabecera:{
        alignItems:"center",
        paddingBottom:"10%",
        marginHorizontal:"8%"
    },
    contenedorSecuandario:{
        justifyContent:"center",
        width:"80%",
        paddingTop:"75%"
    },
    body:{
        justifyContent:"center",
        width:"95%",
        marginHorizontal:10,
        gap:10,
        maxHeight:"50%"
    },
    TIdatos:{
        marginBottom:10,
        backgroundColor:"rgba(220, 228, 250, 0.5)"
    },
    btnPrimario:{
       
        width:"60%"
    },
    fab: {
        backgroundColor:"#963A33",
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: 10,
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
    icon:{
        flex:1,
        alignItems:"flex-end"
    },
    userIcon:{
        backgroundColor:"#963A33"
    },
    headerModal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
    modal:{
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#fff',
        marginHorizontal:20,
        borderRadius: 10,
        gap:10
      },
    
})
