import React from 'react'; 
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements'

const ChatList = ({id, chatName, enterChat}) => {
    return(
        <ListItem>
            <Avatar 
                rounded 
                source={{
                    uri:
                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "800"}}>
                    Sally Thompson
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}>
                    My feet are super soft like a baby's butt ferferif jfeoj 
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default ChatList; 
