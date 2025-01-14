import React from 'react';

import {
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';


function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText} >text in center</Text>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            // alignItems: 'center',
            alignItems: 'flex-end', // It moves from left to bottom
            justifyContent: 'flex-end' // From top to bottom



        },
        whiteText: {
            color: '#FFFFFF'
        },
        darkText: {
            color: '#000000'
        }
    }
);

export default AppPro;