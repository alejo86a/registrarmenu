import React from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';

var Submit = React.createClass({

   mixins: [Reflux.connect(MenuStore, 'menustore')],

   propTypes: {
    value: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (      
        React.createElement('input', {
          type: 'text',
          placeholder: 'Description',
          //value: this.props.value.description,
        }),
      )
    )
  },
});

export default Submit;