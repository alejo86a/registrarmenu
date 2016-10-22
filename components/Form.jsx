import React from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';
import MenuAction from '../actions/MenuAction.js';

var Form = React.createClass({

   mixins: [Reflux.connect(MenuStore, 'menustore')],

  //#region Definicion de propiedades
  getInitialState () {
    return {
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    };
  },
  //#endregion

  //#region Metodos
  nameChange(e){  
    this.setState({name: e.target.value })
  },

  priceChange(e){    
    this.setState({price: e.target.value })
  },

  descriptionChange(e){    
    this.setState({description: e.target.value })
  },

  changeHandler: function(e) {
    this.setState({selected : e.target.value })
  },

  guardarClic() {
    if(name != "" && price != "" && description != "" && selected != 0){
      MenuAction.crearMenu(name, price, description, selected); // React Component instance
    }
    else
    {
      alert('Guardado Correctamente')
    } 
  },
  //#endregion 

  render: function() {
    return (
      React.createElement('form', {className: 'form-group'},
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Nombre (required)',          
          onChange: this.nameChange.bind(this),
        }, this.props.name),
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Price (required)', 
          onChange: this.priceChange.bind(this),         
        }, this.props.price),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Descripción (required)',
          className: 'form-control',
          onChange: this.descriptionChange.bind(this), 
        }, this.props.price),
        React.createElement('select', 
          { value: this.state.selected,
           onChange: this.changeHandler,
           className: 'form-control',
         },
          React.createElement("option", { value: 0 }, "SELECCIONE UN RESTAURANTE"),
          React.createElement("option", { value: 1 }, "RESTAURANTE 1"),
          React.createElement("option", { value: 2 }, "RESTAURANTE 2"),
          React.createElement("option", { value: 3 }, "RESTAURANTE 3"),
        ),
        React.createElement('button', {
          type: 'submit',
          onClick: this.guardarClic(),
          className: 'btn-primary',
        }, "GUARDAR") ,
      )
    )
  },
});

export default Form;