import React from 'react';
import { Text, View, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// import Entypo from 'react-native-vector-icons/Entypo';
import Styles from '../styles/Style';

const Header = () => {
    return (
        // #e21b70;
        <View style={{ height: 130, backgroundColor: '#e21b70', }}>
            <View>
                <View style={{}}>
                    <TouchableOpacity style={{margin:10,}}>
                        <Entypo name='menu' color={'#fff'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{   margin:10,marginHorizontal: 50,position:'absolute' }}>
                        <Text style={{color: '#fff',fontSize: 23,}}>
                            Current Location
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', marginHorizontal: 74, }}>Wahid Pan Shop</Text>
                </View>
                    <View style={{
                        marginHorizontal: 25, marginVertical: 10,
                        backgroundColor: '#fff', borderRadius: 50,
                    }}>
                        {/* <AntDesign name='search1' color={'#fff'} size={21} /> */}
                        <ScrollView>
                        <TextInput style={{ marginHorizontal: 19, width: 300, height: 45, }}
                            placeholder='Search for shops & restaurants' />
                </ScrollView>
                    </View>
            </View>
        </View>
    );
};


export default Header;
