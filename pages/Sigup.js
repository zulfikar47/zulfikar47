import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Headline from '../Component/HeadLine';
import InputText from './Component/Input-Text';
import ButtonComponent from '../Component/Button';
import Konfirmasi from '../Component/Konfirmasi';
import IconButton from './Component/Icon-Button';

const SignUp = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headlineContainer}>
                    <Headline text="Sign up" />
                </View>

                <View style={styles.inputContainer}>
                    <InputText placeholder="Name" />
                    <InputText placeholder="Email" />
                    <InputText placeholder="Password" />
                </View>

                <View style={styles.konfirmasiContainer}>
                    <Konfirmasi text="Already have an account?" fontSize={14} />
                </View>

                <View style={styles.buttonContainer}>
                    <ButtonComponent backgroundColor="#FF0000" text="SIGN UP" />
                </View>

                <View style={styles.konfirmasiContainer}>
                    <Konfirmasi text="Or sign up with social account" fontSize={14} />
                </View>

                <View style={styles.iconButtonContainer}>
                    <IconButton imageSource={require('./assets/gulugulu.png')} />
                    <IconButton imageSource={require('./assets/fb.png')} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
    headlineContainer: {
        marginBottom: 50,
    },
    inputContainer: {
        marginBottom: 20,
    },
    konfirmasiContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    iconButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default SignUp;