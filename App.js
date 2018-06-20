import React, { Component } from 'react';

import axios from 'axios';
import Aux from './hoc/Aux';
import MoviePage from './Containers/MoviePage/MoviePage';
import { Card } from 'react-materialize';


class App extends Component {
    constructor() {
        super()
        this.state = {
            movie: '',
            movies: []
        }
        this.submitButton = this.submitButton.bind(this);
    };

    componentDidMount = () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=217fda704a2b86d77d3e0819f35f68d3')
            .then(res => {
                this.setState({ movies: res.data.results })
                //this.setState({person:res.data.title})
            })
    }

    changeHandler = (event) => {
        this.setState({ movie: event.target.value })
    };

    submitButton = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=217fda704a2b86d77d3e0819f35f68d3&query=${this.state.movie}`)
            .then(res => {
                this.setState({ movies: res.data.results })
            })
    };

    render() {

        const movieList = this.state.movies.map(list => (
            <Card>
                <ul key={list.id}>
                    <li>  Name:{list.title} </li>
                    <li>  Vote Average:{list.vote_average} </li>
                    <li>  Overview:{list.overview} </li>
                </ul>
            </Card>

        ))
        return (
            <Aux>
                <MoviePage changed={this.changeHandler}
                    clicked={this.submitButton}
                    value={this.state.movie} />

                {movieList}

            </Aux>
        )
    }
}
export default App;