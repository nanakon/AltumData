import React from 'react';

import language_pack from './lang_packs/eng.json';

class BioComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="aboutus-page">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column-bio">
	  					<img id="profile-photo" src={"/pics/profile_photos/"+this.props.match.params.person_name+".jpg"}/>
	  				</div>
	  				<div className="right-column-bio">
	  					<div className="right-column-content">
	  						<div className="bio-content" >
	  							<div id="profile-name">
			  						{language_pack["bios"][this.props.match.params.person_name]["name"]}<br/>
			  					</div>
			  					<div id="profile-role">
			  						{language_pack["bios"][this.props.match.params.person_name]["role"]}<br/>
			  					</div>
	  							<h3 className="offering-description-div">
	  								{language_pack["bios"][this.props.match.params.person_name]["div1"]}
	  							</h3>
	  							<h3 className="offering-description-div">
	  								{language_pack["bios"][this.props.match.params.person_name]["div2"]}
	  							</h3>
	  						</div>
	  					</div>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default BioComponent;