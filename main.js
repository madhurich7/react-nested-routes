import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import India from './components/India';
import Us from './components/Us';
import Home from './components/Home';
import HomeIndia from './components/HomeIndia';
import AboutIndia from './components/AboutIndia';
import ContactIndia from './components/ContactIndia';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

class Main extends React.Component{

	render(){
		return(
				<Router history={browserHistory}>
					<Route path={'/'} component={Root}>
						<IndexRoute component={Home}/>
						<Route path={'india'} component={India}/>

						<Route component={India}>
							<Route path={'aboutindia'} component={AboutIndia}/>
							<Route path={'contactindia'} component={ContactIndia}/>
						</Route>
						<Route path={"us"} component={Us}/>
						<Route component={Us}>
							<Route path={'aboutus'} component={AboutUs}/>
							<Route path={'contactus'} component={ContactUs}/>
						</Route>
					</Route>
					
				</Router>
				
					
				
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));