import React from 'react';
import { View, Button, Text } from 'react-native';

const Buddy_up_industry = ({ navigation }) => (
    <View>
        <Text>This is buddy up industry</Text>
        <Button title="this is view profile" onPress={() => navigation.navigate('View Profile')}></Button>
    </View>
);

export default Buddy_up_industry;