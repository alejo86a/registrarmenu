import React from 'react';

class App extends React.Component {
   render() {
      return (
      	 <div>
	        <form>
	          <div>
	            <input type="email" placeholder="Name"/>
	          </div>
	          <div>
	            <input type="text" placeholder="Price"/>
	          </div>
	          <div>
	            <input type="text" placeholder="Descripcion"/>
	          </div>
	          <div>
	          <select name="cars">
				<option value="1">Restarante 1</option>
				<option value="saab">Restarante 2</option>
				<option value="mercedes">Restarante 3</option>
				<option value="audi">Restarante 4</option>
			  </select>
	          </div>
	          <div>
	            <input type="submit"/>
	          </div>
	        </form>
	      </div>
      );
   }
}

export default App;