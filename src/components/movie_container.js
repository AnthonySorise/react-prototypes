import React, {Component} from 'react'
import Movie from './movie'
import axios from 'axios'


class MoviesContainer extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.state.movies = [];
    }

    render(){
        this.movieArray = this.state.movies.map(
            (movieInfo, index) => {
                return <Movie info = {movieInfo} key = {index}/>
            }
        );
        return(
            <div>
                {this.movieArray}
            </div>
        )
    }
    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url)
            .then(
                (data)=>{
                    this.setState({
                        movies: data.data.feed.entry
                    })
                }
            )
    }
}

export default MoviesContainer