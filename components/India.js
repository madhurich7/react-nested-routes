import React from 'react';
import CommonHeader from './CommonHeader';

class India extends React.Component{
	constructor(){
		super();
		this.state = {
			people: ["mad", "man", "mom"],
			element: <h4>hello all</h4>
		};
	}

	//adding more people
	addPeople(){
		var newPeople = this.state.people;
		this.setState({
			people: newPeople.concat(this.inputPerson.value)
		});
		console.log(this.state.people);
		this.inputPerson.value = null;
	}
	getInput(){
		console.log(this.inputNode.value);
		console.log(this.inputNode);
	}
	render(){
		return(
				<div>
					<h1>About India</h1>
					<CommonHeader compName={"India"}/>
					<input type="text" ref={(input)=>this.inputNode = input} defaultValue="default"/>
					<button onClick={this.getInput.bind(this)}>Get refs</button>

					<h4>People</h4>
					<ul>{this.state.people.map((person, i)=><li key={i}>{person}</li>)}</ul>
					<input type="text" ref={(input)=>this.inputPerson = input}/>
					<button onClick={this.addPeople.bind(this)}>Add more people</button>
					{this.state.element}
					{this.props.children}

				</div>
			)
	}
}

export default India;