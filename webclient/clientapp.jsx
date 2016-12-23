import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {Login,SearchComponent,View,Logout} from './components/sample';

import Home from './views/home/home.jsx';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={browserHistory}>
			<Route path='/' component={Login}/>
			<Route path='/search' component={Home}>
			<IndexRoute component={SearchComponent}/>
      	<Route path='/view' component={View}/>
				<Route path='/Logout' component={Logout}/>
		</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
