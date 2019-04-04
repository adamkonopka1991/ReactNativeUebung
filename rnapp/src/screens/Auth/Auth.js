import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
    state= {
        viewMode: Dimensions.get("window").height>500 ? "portrait" : "landscape"  
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles)
             //whenever this component does not exist, there is no need to listen for this change -> need to delete this listener, when not needed.
        
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }
    
    updateStyles= (dims) =>
    {
        this.setState({
            viewMode: dims.window.height>500 ? "portrait" : "landscape" 
        });
    }

    loginHandler= () => {
        startMainTabs();
    }
    
    render() {
        let headingText= null;

        if(this.state.viewMode==="portrait") 
        {
            headingText=(
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            );
        }

        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>      
                <View style={styles.container}>              
                    {headingText} 
                    <ButtonWithBackground color="#29aaf4" onPress={()=>alert("Hello")}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-MailAdress"style={styles.input}/>
                        <View 
                            style={this.state.viewMode==="portrait" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                            <View 
                                style={this.state.viewMode==="portrait" ? styles.portraitPasswordWrapper : landscapePasswordWrapper}>
                                <DefaultInput placeholder="Password"style={styles.input}/>
                            </View>
                            <View 
                                style={this.state.viewMode==="portrait" ? styles.portraitPasswordWrapper : landscapePasswordWrapper}>
                                <DefaultInput placeholder="Confirm Password"style={styles.input}/>
                            </View>
                            
                        </View>  
                    </View>                
                    <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }, //style differs from the default style of our custom Component DefaultInput
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen;