import {ScrollView, StatusBar, TouchableOpacity, Image } from "react-native"
import { View, Text } from "react-native"
import SVGImage from '../../assets/images/bottle2.svg';
import style from "./style";



export default function Home(){
    return(
        <>
            <StatusBar />
                <ScrollView>
                    <Text>Tela Home</Text>
                    <Text style={style.info}>Você bebeu  200ml/2L </Text>
                    <View>
                        <SVGImage style={style.SVG}  width={300} height={300}/>
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                            <Image style={{width: 100, height:100}} source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1864/1864846.png',
                            }}/>
                        </TouchableOpacity>
                        <Text>50ml</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={{width: 100, height:100}} source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1864/1864846.png',
                            }}/>
                        </TouchableOpacity>
                        <Text>50ml</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={{width: 100, height:100}} source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1864/1864846.png',
                            }}/>
                        </TouchableOpacity>
                        <Text>50ml</Text>
                    </View>
                </ScrollView>
        </>
    )
}