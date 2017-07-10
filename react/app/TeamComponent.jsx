import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class TeamComponent extends React.Component {
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
	  		<div className="page" id="team-page">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">THE ALTUM DATA TEAM</div>
	  			</div>	
	  			<div id="team-page-content">
	  				<span className="team-name" onClick={()=>this.go_to_page("bio")}>Name1</span> - role1, Name2 - role2, Name3 - role3 .... NameX - roleX
	  			</div>
	  		</div>
	    );
  	}

}

export default TeamComponent;