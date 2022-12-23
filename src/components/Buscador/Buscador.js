import React, { Component } from "react";
import { connect } from "react-redux";
import './Buscador.css';
import { getMovies } from '../../actions';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.getMovies(this.state.title)
  }

  componentDidMount(){
    this.props.getMovies('avengers')
  }

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input className="nav-input" placeholder="Introduce un titulo"
              type="text"
              id="title"
              autoComplete="off"
              value={this.state.title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: title => dispatch(getMovies(title))
  }
}

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(null, mapDispatchToProps)(Buscador);
