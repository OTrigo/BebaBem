import {ScrollView, StatusBar, TouchableOpacity } from "react-native"
import { View, Text } from "react-native"
import SVGImage from '../../assets/images/bottle.svg';
import style from "./style";



export default function Home(){
    return(
        <>
            <StatusBar />
                <View>
                    <Text>Tela Home</Text>
                    <Text style={style.info}>Você bebeu  200ml/2L </Text>
                    <SVGImage/>
                    <View>
                        <TouchableOpacity><Text>Gole de agua</Text></TouchableOpacity>
                        <Text>50ml</Text>
                    </View>
                </View>
        </>
    )
}