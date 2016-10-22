import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

    listenables: [MenuActions],

    crearMenu: function() {      
      $.ajax({
      	crossDomain: true,
      	cache: false,
      	context: this,
      	url: 'https://haskell-dojo.herokuapp.com/menus',
  		method: 'POST',
  		processData: false,
  		data: '{\n\"restaurant\": 1,\n\"name\": \"Frijoles\",\n\"price\": 5000,\n\"description\": \"pollo\"\n}',
		success: function(data) {
          console.log(response);     
        }
	  });
    }
});

export default MenuStore;