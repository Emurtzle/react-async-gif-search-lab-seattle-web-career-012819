import React, { Component } from 'react'

class GifSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ""
        }
    }

    handleQueryChange = (ev) => {
        this.setState({query: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleQueryChange}/>
                </form>
            </div>
        )
    }
}

export default GifSearch;