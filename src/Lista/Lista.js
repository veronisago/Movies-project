import React, { Component } from "react";
import './Lista.css';
import Movie from "../components/Movie/Movie";
import { Modal, Box } from "@mui/material";



export class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false }
    }

    render() {

        const {
            Title,
            Poster,
            imdbID,
        } = this.props.peli;

       

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 5,
            overflow: 'hidden',
        };

        const handleOpen = () => {
            this.setState({ open: true })
            console.log('open');
        };
        const handleClose = () => this.setState({ open: false });


        return (
            <div className="presentacion-lista">
                <div className="contenedor-imagen">
                    <img className="imagen-peli" src={Poster} alt="" />
                </div>
                <button onClick={handleOpen} className='button-title'>{Title}</button>
                <Modal
                    open={this.state.open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Movie handleClose={handleClose} id={imdbID} />
                    </Box>

                </Modal>
            </div>
        );
    }
}


export default Lista