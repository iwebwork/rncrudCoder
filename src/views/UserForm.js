import React, {useState, useContext} from "react"
import {Text, View, TextInput,StyleSheet} from "react-native"
import { Button } from "react-native-elements/dist/buttons/Button"
import UsersContext from "../context/UsersContext"

export default props => {

    // console.warn(Object.keys(props))

    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const { dispatch } = useContext(UsersContext)
 
    return(
       <View style={styles.form}>
            <Text
                    style={styles.title}
            >
                Nome:
                </Text>
            <TextInput
                    onChangeText={(name) => setUser({...user, name})}
                    placeholder = 'Informe o nome'
                    style={styles.input}
                    value={user.name}
            />

            <Text
                style={styles.title}
            >
               Email:
            </Text>
            <TextInput
                    onChangeText={email => setUser({...user, email})}
                    placeholder = 'Informe o email'
                    style={styles.input}
                    value={user.email}
            />

            <Text
                style={styles.title}
            >
               URL do Avatar:
            </Text>
            <TextInput
                    onChangeText={avatar => setUser({...user, avatar})}
                    placeholder = 'Informe a url do avatar'
                    style={styles.input}
                    value={user.avatar}
            />

            <Button
               title="Salvar"
               onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                   props.navigation.goBack()
               }}
            />
       </View>
       
    )
}

const styles = StyleSheet.create({
    input: {
        color:'#000',
        backgroundColor:'#FFF',
        borderColor:'gray',
        borderWidth:1,
    },

    title:{
    },

    form:{
        padding:12
    }
})