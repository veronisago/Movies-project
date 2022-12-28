import React, { Component } from "react";
import { connect } from "react-redux";
import './Home.css';
import { addMovieFavorite } from '../../actions';
import { Lista } from '../../Lista/Lista';
import { Carousel } from 'react-carousel-minimal';



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {

    const data = [
      {
        image: "https://lumiere-a.akamaihd.net/v1/images/pinocho_portada_ea8c8dcc.jpeg?region=0,0,1920,1080",
        caption: `<div><h1>PINOCHO</h1></div>`
      },
      {
        image: "https://img2.rtve.es/n/2386805?w=1600&preview=1657319000725.jpg",
        caption: `<div><h1>THOR</h1></div>`
      },
      {
        image: "https://i0.wp.com/cinemasaturno.com/wp-content/uploads/2022/02/Portadas-para-el-blog-1-1.png?fit=1920%2C1080&ssl=1",
        caption: `<div><h1>UNCHARTED</h1></div>`
      },

    ]

    return (
      <div>
        <div className="carousel-container">
          <Carousel data={data} width='100%' height='500px' time={2000} automatic={true} />
          <div className="image-carousel-gradient"></div>
        </div>
        <div className="title-home">
          <h1>Películas Online</h1>
        </div>
        {this.props.movies ?
          <div className="contenedor-lista">
            {this.props.movies.map((peli, key) =>
              <Lista
                peli={peli}
                key={key}
              />
            )}
          </div>
          :
          <div className='letras-blancas'>Sorry! there are not titles for this film.</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded
  };
};


// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps)(Home);
