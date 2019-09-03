import React, { Component } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import axios from 'axios'

export default class InputIn extends Component {
    
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    login = () => {
        if(this.state.email ===''){
            alert('isi email kamu');
        }else if(this.state.password === ''){
         alert('isi password kamu');
        } else {
        axios({
            method: 'post',
            url: "http://api-kos-express.herokuapp.com/user/login",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
        .then(res =>{
        const data = res.data
        this.setState({data})
        if(this.state.data.email!=null){
            this.props.navigate('Home')
            alert('Login Success')
        }else{
            alert('Login failed')
        }})
    }
        // fetch('http://api-kos-express.herokuapp.com/user/login', {
        //     method: 'post',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email:this.state.email,
        //         password:this.state.password,
        //     })
        // })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     if (responseJson.succes==true){
        //         this.props.navigate('Home')
        //     } else {
        //        alert('gagal')
        //     }
        // })
        // .catch((error) => {
        // console.error(error);
        // });
    }
    
    render() {
        return (
            <View>
                <View>
                    <TextInput
                        style={styles.inputBox}
                        placeholder='Surel'  
                        underlineColorAndroid= 'rgba(0,0,0,0)'
                        placeholderTextColor= '#fff'
                        
                        onChangeText={(email)=> this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='Sandi'
                        underlineColorAndroid= 'rgba(0,0,0,0)'
                        placeholderTextColor= '#fff'
                        secureTextEntry={true}
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.buttonText} >Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox :{
        width :300,
        backgroundColor : 'rgba(255,255,255,0.1)',
        borderColor: 'white',
        borderWidth: 0,
        borderRadius :5,
        paddingHorizontal :16,
        fontSize : 16,
        color :'#fff',
        marginVertical :10
    },
    button :{
        width :300,
        borderRadius :5,
        backgroundColor : '#F98F0B',
        marginVertical :10,
        paddingVertical :13
    },
    buttonText :{
        fontSize :16,
        fontWeight : '500',
        color : '#fff',
        textAlign :'center'
    }
})