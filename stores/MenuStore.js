import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

    listenables: [MenuActions],
  

    crearMenu: function() {
      console.log('pepe')
    }
});

export default MenuStore;