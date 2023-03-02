// React
import React, { useState } from 'react'

// React Native
import {
    Platform,
    Pressable,
    Text,
    View,
    Modal,
    TouchableHighlight,
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

// Styles
import { styles } from './DatePickertStyle'

const DatePicker = (props) => {
    const { defaultDate, onDateChange } = props

    const [date, setDate] = useState(new Date(defaultDate))
    const [show, setShow] = useState(false)

    const onChange = (e, selectedDate) => {
        setDate(new Date(selectedDate))
    }

    const onAndroidChange = (e, selectedDate) => {
        setShow(false)
        if (selectedDate) {
            setDate(new Date(selectedDate))
        }
    }

    const onCancelPress = () => {
        setDate(new Date(date))
        setShow(false)
    }
    const onDonePress = () => {
        onDateChange(date)
        setShow(false)
    }

    const renderDatePicker = () => {
        return (
            <>
                <DateTimePicker
                    display={Platform.OS === 'ios' ?
                        'spinner' :
                        'default'}
                    timeZoneOffsetInMinutes={0}
                    value={new Date(date)}
                    mode='date'
                    minimumDate={new Date(1920, 10, 20)}
                   
                    onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
                />
            </>
        )
    }

    return (
        <Pressable
            style={styles.box}
            onPress={() => setShow(true)}
            activeOpacity={0}
        >
            <View>

                <Text style={styles.txt}>
                    {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                </Text>

                {Platform.OS !== 'ios' && show && renderDatePicker()}

                {Platform.OS === 'ios' && (
                    <Modal
                        transparent={true}
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(!show)}
                    >
                        <View style={styles.screen}>
                            <TouchableHighlight
                                underlayColor={'#FFF'}
                                style={styles.pickerContainer}
                            >
                                <View style={{ backgroundColor: '#fff' }}>
                                    <View style={{ marginTop: 20 }}>{renderDatePicker()}</View>
                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onCancelPress}
                                        style={[styles.btnText, styles.btnCancel]}
                                    >
                                        <Text style={{ fontSize: 18 }}>Cancel</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        underlayColor={'transparent'}
                                        onPress={onDonePress}
                                        style={[styles.btnText, styles.btnDone]}
                                    >
                                        <Text>Done</Text>
                                    </TouchableHighlight>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                )}
            </View>
        </Pressable>
    )
}
export default DatePicker
