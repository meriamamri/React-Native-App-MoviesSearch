import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

    render() {
        return (
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    favoriteList={true}
                />
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        favoritesFilm:  state.toggleFavorite.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites)
