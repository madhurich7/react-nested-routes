import React from 'react';
import India from './India';
import Us from './Us';

class Home extends React.Component{
	
	render(){
		return(
				<div>
					
					<div className="row">
						<div className="col-sm-6"><India/></div>
						<div className="col-sm-6"><Us/></div>
					</div>
					
				</div>
				
			)
	}
}

export default Home;