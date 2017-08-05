import React from 'react';
import Button from 'muicss/lib/react/button';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class BlockButtonComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.button_click = this.button_click.bind(this);
	};

	button_click() {
		this.props.onClick(this.props.destination);
	};

	render() {	
	  	return (
	  		<div className="block-button">
	  			<Link to={this.props.destination}><Button className="homepage-button"><span className="homepage-button-label">{this.props.text}</span></Button></Link>
	  		</div>
	    );
  	}

}

export default BlockButtonComponent;