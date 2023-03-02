// React
import React, { useState } from 'react'

// React Native
import {
    View,
    Text,
    TextInput
}
    from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Styles
import { styles } from './InputStyle'

const Input = ({
    label,
    iconName,
    ...props
}) => {

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>{label}</Text>
            <View
                style={[
                    styles.inputContainer, { alignItems: 'center' }
                ]}>
                <Icon
                    name={iconName}
                    style={{ fontSize: 22, marginRight: 10 }}
                />

                <TextInput
                    autoCorrect={false}
                    style={{ flex: 1 }}
                    {...props}
                />
            </View>

        </View>
    )
}


export default Input;