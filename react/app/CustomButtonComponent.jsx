import React from 'react';

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
	  		<Link className="custom-link" to={{pathname:this.props.destination, offering_id:this.props.offering_id, course: this.props.course, picture: this.props.picture}} className="custom-link"><p className="button-link">{this.props.label}</p></Link>
	    );
  	}

}

export default CustomButtonComponent;