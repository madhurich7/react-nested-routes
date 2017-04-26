import React from 'react';
import {Link} from 'react-router';

class CommonHeader extends React.Component {
	
	render(){
		return(
				
				<ul>
					<li>Home</li>
					  {this.props.compName ? (
					        <li><Link to={'/aboutindia'}>About</Link></li>
					      ) : (
					        <li><Link to={'/aboutus'}>About</Link></li>
					      )
					  }

					   {this.props.compName ? (
					        <li><Link to={'/contactindia'}>Contact</Link></li>
					      ) : (
					        <li><Link to={'/contactus'}>Contact</Link></li>
					      )
					  }
					
					{/*<li><Link to={'/aboutindia'}>About</Link></li>*/}
					{/*<li><Link to={'/contactindia'}>Contact</Link></li>*/}

				</ul>
			)
	}
}

export default CommonHeader;