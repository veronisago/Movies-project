import React, { Component } from "react";
import { connect } from "react-redux";
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div className="favourite-section">
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFavourites.map(pelicula =>
            <li key={pelicula.id}>{pelicula.title}
              <button onClick={()=> this.props.removeMovieFavorite(pelicula.title)}>
                x
              </button>
            </li>)}
        </ul>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    moviesFavourites: state.moviesFavourites
  };
};

const mapDispatchToProps = {
  removeMovieFavorite
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);