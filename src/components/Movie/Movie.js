import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

//IMPLEMENTACION DE LOS HOOKS EN COMPONENTES FUNCIONALES
const Movie =(props)=>{
    const movieId = this.props.match.params.id;
    const dispatch= useDispatch();
    const movieDetail= useSelector((state)=> state.movieDetail);

    useEffect(()=>{
        dispatch(getMovieDetail(movieId));
    }, [dispatch, movieId])

    return (
        <div className="movie-detail" >
            <h2>{movieDetail.Title}</h2>
            <h3>{movieDetail.Year}</h3>
            <h3>{movieDetail.Plot}</h3>
            <h3>{movieDetail.Awards}</h3>
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