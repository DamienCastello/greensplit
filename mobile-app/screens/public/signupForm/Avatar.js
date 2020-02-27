import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import { View, StyleSheet, Text } from 'react-native';


export default class AvatarUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null
        }
    }

    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)
        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            this.setState({ avatar: image })
            this.props.onSelected(image)
        }
        this.props.resetError('avatar')
    }
    render() {
        const { erroned } = this.props;
        return (
            <View style={erroned ? styles.erroned : {}} >
                <Avatar
                    onPress={this.pickFromGallery}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    showEditButton
                    size={100}
                    containerStyle={{alignSelf:'center', flex:1, marginTop:20}}
                    source={this.state.avatar}
                />
                {erroned && <Text>Can't be blank !</Text>}
            </ View>
        )
    }
}

const styles = StyleSheet.create({
    erroned: { borderBottomWidth: 1, borderColor: 'red', width: 100 }
})


