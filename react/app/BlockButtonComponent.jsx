import React from 'react';
import Button from 'muicss/lib/react/button';


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
	  				<Button className="homepage-button" onClick={this.button_click}>{this.props.text}</Button>
	  		</div>
	    );
  	}

}

export default BlockButtonComponent;