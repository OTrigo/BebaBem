import AsyncStorage from "@react-native-async-storage/async-storage";


export default async function GetData(){
    
    const date = new Date();
    //pegando a chave que é o dia atual
    const key =  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const data = await AsyncStorage.getItem(key);

    return data;
    
    
    
}