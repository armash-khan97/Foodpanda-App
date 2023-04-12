import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import Styles from '../styles/Style';
import SectionTwo from './SectionTwo';


const PageOne = ({ navigation }) => {
    return (
        <View style={Styles.SecTow}>
            <Text style={Styles.SecTwoText}>
                Your daily deals
            </Text>
            <View>
                <TouchableOpacity style={Styles.pageOneOne}>
                    <Image style={Styles.pageOneImage}
                        source={require('../Images/34.jpg')} />
                        <Text style={{position:'absolute',color:'#fff',backgroundColor:'#e21b70', borderRadius:5 ,width:110,marginTop:46}}>Pau-Pau Deals</Text>
                        <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default PageOne;
