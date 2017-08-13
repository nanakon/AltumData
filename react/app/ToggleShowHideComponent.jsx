import React from 'react';

import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons';

class ToggleShowHideComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show:this.props.show
		}
		this.toggle_show = this.toggle_show.bind(this);
	};

	toggle_show() {
		this.setState({show:!this.state.show});
	};

	render() {	
		var display_property = this.state.show == false ? 'none' : 'block';

		var toggle_class = this.state.show == false ? "toggle-show-hide offering-example-text offering-example-text-hidden" : "toggle-show-hide offering-example-text offering-example-text-shown";

	  	return (
	  		<div className="toggle-show-wrapper">
	  			<div className="offering-description-title clickable-offering-description-title" onClick={this.toggle_show}>{this.props.title}<NavButton style={{float:'right'}}direction="down" opened={this.state.show} size={30} thickness={2} color="#7044d6" /></div>
		  		<div className={toggle_class}>
		  			{this.props.children}	
		  		</div>
		  		<br/>
	  		</div>
	    );
  	}

}

export default ToggleShowHideComponent;