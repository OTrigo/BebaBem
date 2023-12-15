import {ScrollView, StatusBar, TouchableOpacity, Image } from "react-native"
import { View, Text } from "react-native"
import LottieView from "lottie-react-native";
import style from "./style";
import Storage from '../../services/Storage';
import GetData from "../../services/GetData";
import { useEffect, useRef, useState } from "react";



export default function Home(){

    const animationRef = useRef<LottieView>(null);
    const [water, setWater] = useState(0);//valor da agua em ML
    const [animacao, setAnimacao] = useState(0);//valor da agua em ML
    const [render, setRender] = useState(false);


    useEffect(()=>{
        function Animation(){
            setAnimacao(water*0.055);
            console.log(animacao)
            animationRef.current?.play(0, animacao);
        }
        async function pegaDados(){
            const get = await GetData();
            (get) ? setWater(parseInt(get)): null;
            
            setRender(true)
        }
        pegaDados()
        Animation()
        

        
    },[render])

    if(!render){
        return (<Text>carregando...</Text>)
    }
    console.log('passou aqui')
    return(
        <>
            <StatusBar />
                <ScrollView>
                    <Text style={style.info}>{`Você bebeu  ${water}ml/2L`}</Text>
                    <View>
                        <LottieView
                            loop={false}
                            ref={animationRef}
                            style={{
                            alignSelf: 'center',
                            width: 250,
                            height: 500,
                            }}
                            source={require('../../assets/Lottie/bottle.json')}
                        />
                    </View>
                    
                    <View>
                        <TouchableOpacity onPress={()=>Storage(50)}>
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