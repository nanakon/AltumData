import React from 'react';

//PROPS
//destination
//label
//go_to_page function

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
	  		<p className="button-link" onClick={()=>this.go_to_page(this.props.destination)}>{this.props.label}</p>
	    );
  	}

}

export default CustomButtonComponent;