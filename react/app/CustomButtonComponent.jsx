import React from 'react';
import Button from 'muicss/lib/react/button';

//PROPS
//destination
//label
//props for destination component

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class CustomButtonComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	this.go_to_page = this.go_to_page.bind(this);
	};

	go_to_page(destination) {
		this.props.go_to_page(destination);
	};

	render() {	
	  	return (
	  		<div className="block-button-2">
	  			<Link to={{pathname:this.props.destination, offering_id:this.props.offering_id, course: this.props.course, picture: this.props.picture}}><Button className="homepage-button-2"><span className="homepage-button-label">{this.props.label}</span></Button></Link>
	    	</div>
	    );
  	}

}

export default CustomButtonComponent;