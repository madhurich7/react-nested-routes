import React from 'react';
import CommonHeader from './CommonHeader';

class Us extends React.Component{
	render(){
		return(
				<div>
					<h1>About US</h1>
					<CommonHeader/>
					{this.props.children}
				</div>
			)
	}
}

export default Us;