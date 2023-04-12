import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Styles from '../styles/Style';

const SectionThree = () => {
    return (
        <View style={{ backgroundColor: '#fff', }}>
            <Text style={{ margin: 13, fontWeight: 'bold', color: '#000', fontSize: 20, }}>Cuisines</Text>
            <View style={{}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} >

                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/18.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/30.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Fast Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/21.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Desserts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/23.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>BBQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/24.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Pulao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/32.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Beverages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/29.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Steak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/31.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Pakistani</Text>
                    </TouchableOpacity>




                </ScrollView>
            </View>
            <View style={{}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} >

                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/19.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Biryani</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/20.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Burgers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/22.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Chinese</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0' }}
                            source={require('../Images/26.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Sandwiches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/24.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Pulao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/32.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Beverages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/29.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Steak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 4, padding: 4 }}>
                        <Image style={{ width: 80, height: 80, borderColor: '#fff', borderRadius: 10, backgroundColor: '#F2F1F0', }}
                            source={require('../Images/31.png')} />
                        <Text style={{ fontWeight: 'bold', color: '#000', }}>Pakistani</Text>
                    </TouchableOpacity>




                </ScrollView>
            </View>
        </View >
    );
};


export default SectionThree;
