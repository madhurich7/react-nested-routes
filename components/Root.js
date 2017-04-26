import React from 'react';
import Header from './Header';
import India from './India';
import Us from './Us';

class Root extends React.Component{
	render(){
		return(
				<div>
					<Header/>
					
					{this.props.children}
				</div>
				
			)
	}
}

export default Root;