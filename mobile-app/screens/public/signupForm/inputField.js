import React from 'react';
import { TextInput, Text, View, Input } from 'react-native';

const InputField = ({
    name,
    customStyle,
    onChangeText,
    value,
    disabled,
    placeholder,
    errors,
    secureTextEntry=false
}) => {
    return (
        <View>

            <TextInput
                value={value && value}
                onChangeText={onChangeText ? (val) => onChangeText(val) : null}
                placeholder={placeholder ? placeholder : ""}
                disabled={disabled}
                style={customStyle ? customStyle : {}}
                secureTextEntry={secureTextEntry}
            />
            {errors && errors.length > 0 && errors.map((item, index) =>
                
                item.field === name && item.error ?
                    <Text style={{ color: 'red', paddingLeft: 10 }}
                        >
                        {item.error} 
                    </Text>
                    : <View />
            )
            }
        </View>
    );
}

export default InputField;