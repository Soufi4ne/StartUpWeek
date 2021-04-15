import React, {useState} from 'react';
import { StyleSheet, View, TextInput,Text, TouchableOpacity } from 'react-native';


export default function LoginScreen({navigation}){
   const [email, setEmail]=useState("");
   const [password, setPassword]=useState("");

    return(
    


            <View style={styles.container}>
                <Text style={styles.logo}>Fast&Charge</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={setEmail} />
                </View>

                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={setPassword} />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('GoogleMap')}  >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>


    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#59C65B",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#C0C0C0",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "#003f5c",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#59C65B",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "#003f5c"
    }
});