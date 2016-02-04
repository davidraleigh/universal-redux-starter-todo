import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../../redux/reducers'
import CompApp from '../../redux/components/App';

let store = createStore(todoApp)

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <CompApp />
        </Provider>
        //document.getElementById('root')
    	// <div>
    	// 	Hello Universal Redux!
    	// 	<div>
    	// 		Moar Stuff
    	// 	</div>
    	// </div>
    	);
  }
}
