import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Styles from '../styles/Style';

const SectionTwo = () => {
    return (
        <View style={Styles.SecTow}>
            <View style={{ margin: 10, }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={Styles.SecTwoImg}
                            source={require('../Images/seven.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={Styles.SecTwoImg}
                            source={require('../Images/eight.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/six.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/nine.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/ten.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/eleven.png')} />
                    </TouchableOpacity >
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={Styles.SecTwoImg}
                            source={require('../Images/twelf.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={Styles.SecTwoImg}
                            source={require('../Images/thirteen.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/fourteen.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/fifteen.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={Styles.SecTwoImg}
                            source={require('../Images/sixteen.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.hor}>
                        <Image style={{ borderRadius: 12 }}
                            source={require('../Images/seventeen.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};


export default SectionTwo;
