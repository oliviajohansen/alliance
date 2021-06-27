import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackgroundComponent } from 'react-native';

const QuickHelp = ({navigation}) => (
    <View style={styles.parentContainer}>
        <View style={styles.back}>
            <Button
                title="Back"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.question}>What would you like to explore?</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Accommodation"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="COVID Regulations"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Job Searching"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Policies"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Taxes"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Transport"
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='black'
                        title="Others"
                    />
                </View>
            </View>
        </View>
    </View>
    
);

const styles = StyleSheet.create({
    parentContainer: {
        alignSelf: 'center',
        
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#AAB0B7',
        borderRadius: 8,
        width: 380,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 100
    },
    buttonContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    question: {
        paddingLeft: 8,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    option: {
        paddingTop: 10,
        paddingLeft: 5
    },
    back: {
        alignSelf: "flex-start"
    },
    button: {
        backgroundColor: '#DADADB',
        borderRadius: 8,
        borderColor: '#DADADB',
        width: 340,
        height: 40,
        textAlign: "left"
    }
})

export default QuickHelp;