import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { IconButton, MD3Colors, Text } from 'react-native-paper'
import { Ficha } from '../Home'
import { styles } from '../../themes/StylesGeneral'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Props{
    ficha: Ficha
}
export const Cards = ({ficha}:Props) => {
 const navigation=useNavigation();
    return (
    <View style={styles.card}>
        <View>
            <Text variant='labelLarge'>Enfoque: {ficha.enfoque}</Text>
            <Text variant='bodyMedium'>Horas: {ficha.horas}</Text>
        </View>
        <View style={styles.icon}>
        <IconButton
            icon="archive-edit"
            iconColor={MD3Colors.neutral0}
            size={20}
            onPress={() => navigation.dispatch(CommonActions.navigate({name:'Actualizacion',params:{ficha}}))}
        />
        </View>
    </View>

  )
}
