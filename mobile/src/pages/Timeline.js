import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import Tweet from '../components/Tweet';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {
    static navigationOptions = {
        title: "Inicio",
        headerRight: (
            <TouchableOpacity onPress={() => { }}>
                <Icon
                    name="add-circle-outline"
                    style={{ marginRight: 20 }}
                    size={24}
                    color="#4bb0ee"
                />
            </TouchableOpacity>
        )
    }

    state = {
        tweets: [],
    };

    async componentDidMount() {
        const response = await api.get('tweets');

        this.setState({ tweets: response.data });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.tweets}
                    keyExtractor={tweet => tweet._id}
                    renderItem={
                        ({ item }) => <Tweet tweet={item} />
                    }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});