import React from 'react';
import Buscador from './componentes/Buscador';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1 className='text-warning'> Pleses wait some time.... </h1> </div>;
    return (
      <section className='flex-column col m-auto mx-5'>
        <section className='row m-10 justify-content-center align-items-center'>
          <p className='fw-bolder font85'>Nuxiba</p>
        </section>

        <Buscador datosBusqueda ={this.datosBusqueda}/>
        <p>{this.state.termino}</p>
        {items.map((item) => (
          <section key={item.id} className='row m-10'>

            <div className='d-flex align-items-center col-lg col-sm-6'>{item.username}</div>
            <div className='d-flex align-items-center col-lg col-sm-6'>{item.name}</div>
            <div className='d-flex align-items-center col-lg col-sm-6'>{item.email}</div>
            <div className='d-flex align-items-center col-lg col-sm-6'>{item.phone}</div>
            <div className='d-flex align-items-center col-lg col-sm-6'>{item.website}</div>
            <input type="submit" className='btn btn-sm btn-danger mx-5' value='Posts' />
            <input type="submit" className='btn btn-sm btn-danger mx-5' value='All' />
          </section>

        ))}
      </section>
    );
  }
}

export default App;