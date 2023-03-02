
// React
import React, { useState } from 'react'

// React Native
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
}
    from 'react-native'
import { VStack } from 'native-base'

// Common Components
import Input from '@common/input/Input'
import DatePicker from '@common/dateTime/DatePicker'

// Styles
import { styles } from './VaccinationScreenStyle'



export default function VaccinationScreen() {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    const handleOnchange = (text) => {
        setName(text)
    }

    const handleOnChangeNumber = (num) => {
        setPhone(num)
    }

    const handleOnCreate = () => {
        if (phone && name) {

            Alert.alert(
                'Your appointment created!',
                'Our team members will contact you for appointment details.',
                [

                    { text: 'OK' },
                ]
            );
        }
        else {
            Alert.alert(
                'Your appointment could not be created!',
                'Please fill in the required information.',
                [

                    { text: 'OK' },
                ]
            );
        }
    }


    return (

        <ScrollView style={styles.container}>
            <View style={{
                alignItems: "center",
                maxWidth: 600
            }}
            >
                <Image
                    source={require("./animals.png")}
                    style={{
                        width: "100%",
                        height: 300
                    }}
                />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Input
                    iconName="account-outline"
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={text => handleOnchange(text)}
                />

                <Input
                    keyboardType="numeric"
                    iconName="phone-outline"
                    label="Phone Number"
                    placeholder="Enter your phone no"
                    value={phone}
                    onChangeText={num => handleOnChangeNumber(num)}
                />

                <Text style={{
                    marginVertical: 5,
                    fontSize: 14
                }}>
                    Date
                </Text>

                <View>
                    <DatePicker
                        defaultDate={'2023-01-01'}
                        onDateChange={(value) => console.log(value)}
                    />
                </View>

                <VStack style={styles.buttonStyle}>

                    <TouchableOpacity onPress={handleOnCreate}>
                        <Text style={{
                            textAlign: "center",
                            color: "#FFFFFF",
                            fontSize: 14
                        }}
                        >
                            Create
                        </Text>
                    </TouchableOpacity>
                </VStack>
            </View>
        </ScrollView>


    )
}