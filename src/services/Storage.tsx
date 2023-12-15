import AsyncStorage from '@react-native-async-storage/async-storage';



export default async function Storage(value:number){
    
        const date = new Date();
        //pegando a chave que é o dia atual
        const key =  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const OldData = await AsyncStorage.getItem(key);

        if(OldData !== null){
            const Newvalue = parseInt(OldData) + value;
            await AsyncStorage.setItem(key, Newvalue.toString())
            return
        }
        await AsyncStorage.setItem(key, value.toString());
        
        
        
    }
