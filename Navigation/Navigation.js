import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'
import Logout from '../screens/LogoutScreen'



const NewsStackNavigator = createStackNavigator({
    News: {
        screen: News,
        navigationOptions: {
            title: 'Les Derniers Films',
        },
    },
    FilmDetail: {
        screen: FilmDetail,
    }
})

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/search.png')}
                        style={styles.icon}/>
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/plein.png')}
                        style={styles.icon}/>
                }
            }
        },
        News: {
            screen: NewsStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/ic_fiber_new.png')}
                        style={styles.icon}/>
                }
            }
        },
        Logout: {
            screen: Logout,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/logout.png')}
                        style={styles.icon}/>
                }
            }
        },
    },

    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true
        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)
