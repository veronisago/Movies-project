import React, { Component } from "react";
import './Lista.css';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md'


export class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = { favoriteProperties: {} }
    }

    render() {

        const handleClick = () => {
            this.props.addMovieFavorite({ title: Title, id: imdbID })
            this.setState({ favoriteProperties: { backgroundColor: "red", color: "white" } })
        }

        const {
            Title,
            Poster,
            imdbID,
        } = this.props.peli;

        return (
            <div className="presentacion-lista">
                <div className="contenedor-imagen">
                    <img className="imagen-peli" src={Poster} alt="" />
                    <button className="movie-card-favorite" style={this.state.favoriteProperties} onClick={handleClick}><MdFavoriteBorder /></button>
                </div>
                <Link to={`/movie/${imdbID}`}>
                    {Title}
                </Link>
            </div>
        );
    }
}


export default Lista