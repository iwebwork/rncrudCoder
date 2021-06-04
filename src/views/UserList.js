import React, { useContext } from "react"
import {View, FlatList} from "react-native"
import {ListItem, Avatar} from 'react-native-elements'
import { Alert } from "react-native";
import UsersContext from './../context/UsersContext'

export default props => {

    const {state, dispatch} = useContext(UsersContext)
    // console.warn(Object.keys(state))

    function getUserItem({item : user}){
        return (
            <ListItem
                bottomDivider
            >
                <Avatar tittle={user.name} source={{uri: user.avatar}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                
                <ListItem.Chevron
                    onPress={() => {props.navigation.navigate('UserForm',user)}}
                    iconProps={{name: "edit"}}
                    iconStyle={{fontSize: 25, color: "orange"}}
                />

                <ListItem.Chevron
                    onPress={() => {confirmActionUserDelete(user)}}
                    iconProps={{name: "delete"}}
                    iconStyle={{fontSize: 25, color: "red"}}
                />
            </ListItem>
        ) 
    }

    function confirmActionUserDelete(user){
        Alert.alert('Exclusão', 'Deseja excluir o usuario: ' + user.name + '?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type:'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    return(
       <View>
           <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
           />
        </View> 
    )
}