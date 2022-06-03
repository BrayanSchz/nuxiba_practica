import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render() {

        return (
            <section onSubmit={this.obtenerDatos} className='m-10'>
                <div className='row'>
                    <div className='form-group col-8'>
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg' placeholder='Search a user. Example: Antony' />
                    </div>
                    <div className='form-group col-4'>
                        <input type="submit" className='btn btn-sm btn-danger btn-block h-100' value='Search...' />
                    </div>
                </div>
            </section>
        );

    }
}

export default Buscador;