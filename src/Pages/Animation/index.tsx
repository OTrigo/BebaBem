import { View, Image, Button } from "react-native";
import LottieView from "lottie-react-native";
import { useRef, useState } from "react";


export default function Animation(){
    const animationRef = useRef<LottieView>(null);
    const [contIni, setContIni] = useState(0)
    const [contFim, setContFim] = useState(10)

    console.log(1000*0.055);


    function ativar(){
        // animationRef.current?.play()
        animationRef.current?.play(0, 110)//fim da animação em 110
        setContFim(contFim+10);
        setContIni(contFim);

    }
    return(
        <View>
            <LottieView
                loop={false}
                ref={animationRef}
                style={{
                alignSelf: 'center',
                width: 250,
                height: 700,
                }}
                source={require('../../assets/Lottie/bottle.json')}
                
            />
            <Button title="ati" onPress={ativar}/>
        </View>
    )
}