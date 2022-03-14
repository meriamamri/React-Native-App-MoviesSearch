import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

export default class LogoutScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.input}>{this.state.displayName} Voulez-vous vraiment se déconnecter !</Text>

                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Déconnecter</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 50,
        fontSize: 17,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        width:130,
        alignItems: "center",
        justifyContent: "center"
    }
});
