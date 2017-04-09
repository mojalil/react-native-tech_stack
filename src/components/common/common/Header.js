//import lib for making a component
import React from 'react';
import {Text, View} from 'react-native';


// make component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text>{props.headerText}</Text>
        </View>
    );
};

// styles

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20
    }
};

// make components avaliable to other parts of the app
export {Header};