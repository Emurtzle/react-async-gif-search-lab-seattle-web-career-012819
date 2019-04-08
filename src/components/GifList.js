import React, { Component } from 'react'

class GifList extends Component {
    constructor(props) {
        super(props)
    }

    loadGifs = () => {
        return this.props.gifs.map((gif, index) => {
            return <img key={index} src={gif} alt="gif" />
        })
    }

    render() {
        return(
            <div>
                {this.loadGifs()}
            </div>
        )
    }
}

export default GifList;