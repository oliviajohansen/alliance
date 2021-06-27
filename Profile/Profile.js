import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Text, TextInput} from 'react-native';
import IndustryList from './IndustryList'

const Profile = ({navigation}) => {
    const [name, setName] = useState("Suzan Winterson")
    const [country, setCountry] = useState("")
    const [bio, setBio] = useState("Today is a better day")
    const [industry, setIndustry] = useState("")
    const [interests, setInterests] = useState("")

    return (
        <View>
            <View style={styles.back}>
                <Button
                    title="Back"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.container}>
                <Image style={styles.profilePic} source={require('../assets/Profile.png')}></Image>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.field}
                        onChangeText={text => setName(text)}
                        defaultValue={name}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Country</Text>
                    <TextInput
                        style={styles.field}
                        onChangeText={text=> setCountry(text)}
                        placeholder="Select your country"
                        defaultValue={country}
                    />
                   {/* <IndustryList /> */}
                </View>
                <View>
                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        style={styles.field}
                        onChangeText={text => setBio(text)}
                        defaultValue={bio}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Industry</Text>
                    <TextInput
                        style={styles.field}
                        onChangeText={text => setIndustry(text)}
                        placeholder="Select your industry"
                        defaultValue={industry}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Interests</Text>
                    <TextInput
                        style={styles.field}
                        onChangeText={text => setInterests(text)}
                        placeholder="Select your interests"
                        defaultValue={interests}
                    />
                </View>
                <View style={styles.complete}>
                    <Button
                        color='#fff'
                        title="Complete"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    field: {
        marginBottom: 15,
        borderWidth: 1,
        height: 40,
        width: 300,
        borderRadius: 8,
        borderColor: '#AAB0B7',
        paddingLeft: 10
    },
    label: {
        textAlign: "left",
        color: '#71787E',
        marginLeft: 3,
        marginBottom: 2
    },
    back: {
        alignSelf: "flex-start",
        marginLeft: 10
    },
    profilePic: {
        height: 200,
        width: 200,
    },
    complete: {
        backgroundColor: '#D96258',
        borderRadius: 8,
        borderColor: '#D96258',
        width: 300,
        height: 40
        
    }
})

export default Profile;