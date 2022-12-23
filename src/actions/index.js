export function addMovieFavorite(movie) {
    return { type: "ADD_MOVIE_FAVORITE", payload: movie };
}

export function removeMovieFavorite(titulo) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload: titulo }
}

export function getMovies(titulo) {
    return async function (dispatch) {
        const response = await fetch("http://www.omdbapi.com/?apikey=550c696e&s=" + titulo);
        const json = await response.json();
        dispatch({ type: "GET_MOVIES", payload: json });
    };
}

export function getMovieDetail(id) {
    return async function (dispatch) {
        const response = await fetch("http://www.omdbapi.com/?apikey=550c696e&i=" + id);
        const json = await response.json();
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
    };
}