import LottieView from "lottie-react-native";




export default function(){
    
    return(
        <LottieView
            autoPlay
            source={require('../assets/Lottie/drink.json')}
            style={{
                alignSelf: "center",
                width: 250,
                height: 500,
              }}
        />
    )
}
