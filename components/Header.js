import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
	render(){
		return(
				<ul>
					<li><Link to={'/'}>Home</Link></li>
					<li><Link to={'/india'}>India</Link></li>
					<li><Link to={'/us'}>US</Link></li>
				</ul>
			)
	}
}

export default Header;