import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import language_pack from './lang_packs/eng.json';

class TeamComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="team-page" style={{backgroundImage:'url("./pics/team.jpg")', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  			<div id="team-page-content-wrapper">
	  			<div style={{position:'relative'}}>
	  				<div className="page-title">THE ALTUM DATA TEAM</div>
	  			</div>	
	  			<div id="team-page-content">
	  				<div id="team-page-content-sub-wrapper">
		  				<Link className="custom-link" to={{pathname:"/team/don-sobeski" , person_name:"don-sobeski"}} className="name-link">Don Sobeski</Link><span className="person-role"> - {language_pack["bios"]["don-sobeski"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/david-hare", person_name:"david-hare"}} className="name-link">David Hare</Link><span className="person-role"> - {language_pack["bios"]["david-hare"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/richard-orth", person_name:"richard-orth"}} className="name-link">Richard Orth</Link><span className="person-role"> - {language_pack["bios"]["richard-orth"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/barbara-reusser", person_name:"barbara-reusser"}} className="name-link">Barbara Reusser</Link><span className="person-role"> - {language_pack["bios"]["barbara-reusser"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/luca-bencini", person_name:"luca-bencini"}} className="name-link">Luca Bencini</Link><span className="person-role"> - {language_pack["bios"]["luca-bencini"]["role"]}</span>
		  				<Link className="custom-link" to={{pathname:"/team/alan-henderson", person_name:"alan-henderson"}} className="name-link">Alan Henderson</Link><span className="person-role"> - {language_pack["bios"]["alan-henderson"]["role"]}</span>
	  				</div>
	  			</div>
	  			</div>
	  		</div>
	    );
  	}

}

export default TeamComponent;