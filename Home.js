import React from 'react';
import { View, Button, Text } from 'react-native';

const Home = ({navigation}) => (
    <View>
    <Text>This is home</Text>
        <Button title='Buddy Up Industry' onPress={() => navigation.navigate('Buddy Up Industry')}> </Button>
        <Button title='Buddy Up Interest' onPress={() => navigation.navigate('Buddy Up Interest')}> </Button>
        <Button title='Buddy Up Country' onPress={() => navigation.navigate('Buddy Up Country')}> </Button>
        <Button title="Alliance academy" onPress={() => navigation.navigate('Alliance Academy')}></Button>
    </View>
        
);

export default Home;