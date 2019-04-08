import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()

        this.state = {
            gifs: []
        }
    }

    fetchGifs = (query = "cats") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({gifs: resp.data.map((gif) => {return gif.images.original.url})})
        })
    }

    componentDidMount() {
        this.fetchGifs();
    }

    render() {
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;