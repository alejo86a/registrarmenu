import React from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';
import MenuAction from '../actions/MenuAction.js';

var Form = React.createClass({

   mixins: [Reflux.connect(MenuStore, 'menustore')],

   propTypes: {
    value: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          //value: this.props.value.name,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Email',
          //value: this.props.value.email,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Description',
          //value: this.props.value.description,
        }),
        React.createElement('button', {
          type: 'submit',
          onClick: MenuAction.crearMenu(),
        }, "GUARDAR") ,
      )
    )
  },
});

export default Form;