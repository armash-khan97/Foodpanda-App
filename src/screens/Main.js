import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from '../styles/Style';
import Header from './Header';
import SectionFour from './SectionFour';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';


const Main = ({navigation}) => {
  return (
    <View style={Styles.continer}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.boxOne}>
          <View style={Styles.iner}>
            <View >
              <TouchableOpacity
                style={Styles.btn} onPress={() => navigation.navigate('PageOne')}
              >
                <Text style={Styles.one}>
                  Food delivery
                </Text>
                <Text style={Styles.txt}>
                  Order from your favourite restaurants ...
                </Text>
                <Image style={Styles.imgOne}
                  source={require('../Images/first.jpg')} />
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity style={Styles.btnTwo}>
                <Text style={Styles.no}>
                  Pandamart
                </Text>
                <Text style={Styles.txt}>
                  convenience, delivered!
                </Text>
                <Image style={Styles.imgTwo}
                  source={require('../Images/second.jpg')} />
              </TouchableOpacity>
              <View >
                <TouchableOpacity style={Styles.btnThree}>
                  <Text style={Styles.non}>
                    Shops
                  </Text>
                  <Text style={Styles.txt}>
                    Everyday
                  </Text>
                  <Text style={Styles.txt}>essentials</Text>
                  <Image style={Styles.imgThree}
                    source={require('../Images/three.jpg')} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
            <TouchableOpacity style={Styles.btnFour}>
              <Text style={Styles.non}>
                Dine-in
              </Text>
              <Text style={Styles.txt} >
                Eat out and
              </Text>
              <Text style={Styles.txt}>save 25% </Text>
              <Image style={Styles.imgFour}
                source={require('../Images/four.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.btnFive}>
              <Text style={Styles.non}>
                Pick-up
              </Text>
              <Text style={Styles.txt}>
                Enjoy up to
              </Text>
              <Text style={Styles.txt}>50% 0ff and ...</Text>
              <Image style={Styles.imgFive}
                source={require('../Images/five.jpg')} />
            </TouchableOpacity>

          </View>
        </View>
        <View style={Styles.SecTow}>
            <Text style={Styles.SecTwoText}>
                Your daily deals
            </Text></View>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </ScrollView>

    </View>


  );
};



export default Main;
