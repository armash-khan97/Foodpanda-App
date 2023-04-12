import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/Style';

const SectionFour = () => {
    return (
        <View>
            <View style={{backgroundColor:'#fff',}}>
                <TouchableOpacity style={Styles.btnEnd}>
                  <Text style={Styles.non}>
                  Become a pro 
                  </Text>
                  <Text style={Styles.txt}>
                  and get exclusive deals
                  </Text>
                  <Image style={Styles.imgEnd}
                    source={require('../Images/end.png')} />
                </TouchableOpacity>
              </View>
        </View>
    );
};


export default SectionFour;
