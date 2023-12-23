import { StyleSheet } from "react-native";



 const styles = StyleSheet.create({
    DarkBackground:{
        backgroundColor: '#171515',
        padding: "2%",

    },
    DarkInfo:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f0f0f0'
    },
    DarkIcon:{
        color: '#f0f0f0',
        padding:10,
        alignSelf: 'flex-end' 
    },
    DarkText:{
        color:'#f0f0f0',
        alignSelf: 'center'
    },
    drinkWaterButtons:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})

export default styles;