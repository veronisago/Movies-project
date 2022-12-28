import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addMovieFavorite, getMovieDetail } from '../../actions/index';
import { MdFavoriteBorder } from 'react-icons/md'
import './Movie.css';

//IMPLEMENTACION DE LOS HOOKS EN COMPONENTES FUNCIONALES
const Movie = (props) => {
    const movieId = props.id;
    const dispatch = useDispatch();
    const movieDetail = useSelector((state) => state.movieDetail);
    const [favoriteProperties, SetfavoriteProperties] = useState({})

    useEffect(() => {
        dispatch(getMovieDetail(movieId));
    }, [dispatch, movieId])

    const handleClick = () => {
        dispatch(addMovieFavorite({ title: movieDetail.Title, id: movieId })) 
        SetfavoriteProperties({ backgroundColor: "red", color: "white" })
    }

    return (
        <div className="movie-detail" >
            <div className="movie-img">
                <img src={movieDetail.Poster} alt="Poster" />
            </div>
            <div className="movie-info">
                <div className="movie-header-container">
                    <h1>{movieDetail.Title}</h1>
                    <button className="movie-card-favorite" style={favoriteProperties} onClick={handleClick}><MdFavoriteBorder /></button>
                </div>
                <p>Year: {movieDetail.Year}</p>
                <p>Plot: {movieDetail.Plot}</p>
                <p>Awards: {movieDetail.Awards}</p>
            </div>
        </div>
    );
}

export default Movie;

//IMPLEMENTACION CON CLASES 

// export class Movie extends Component {

//     componentDidMount() {
//         const movieId = this.props.match.params.id;
//         this.props.getMovieDetail(movieId)
//     }

//     render() {

//         const {
//             Title,
//             Year,
//             Rated,
//             Released,
//             Runtime,
//             Genre,
//             Director,
//             Writer,
//             Actors,
//             Plot,
//             Language,
//             Country,
//             Awards,

//         } = this.props.detail

//         return (
//             <div className="movie-detail" >
//                 <h2>{Title}</h2>
//                 <h3>{Year}</h3>
//                 <h3>{Rated}</h3>
//                 <h3>{Released}</h3>
//                 <h3>{Runtime}</h3>
//                 <h3>{Genre}</h3>
//                 <h3>{Director}</h3>
//                 <h3>{Writer}</h3>
//                 <h3>{Actors}</h3>
//                 <h3>{Plot}</h3>
//                 <h3>{Language}</h3>
//                 <h3>{Country}</h3>
//                 <h3>{Awards}</h3>
//             </div>
//         );
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//         detail: state.movieDetail
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMovieDetail: title => dispatch(getMovieDetail(title))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Movie);