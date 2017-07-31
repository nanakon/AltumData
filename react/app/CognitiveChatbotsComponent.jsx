import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

class OfferingsComponent extends React.Component {
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
		console.log(this.props.location.course);
		console.log(this.props.match.params.offering_id);
		console.log(this.props);
	  	return (
	  		<div className="page" id="team-page">
	  			<div style={{position:'relative'}}>
	  				<div className="left-column">
	  					<div className="page-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["name"]}</div>
	  					<img id="offering-pic" src={"./pics/"+this.props.location.picture}/>
	  				</div>
	  				<div className="right-column">
	  					<div className="right-column-content">
	  						<div className="course-description">
	  							<h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div1-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div1-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div2-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div2-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div3-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div3-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div4-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div4-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div5-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div5-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div6-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div6-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div7-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div7-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div8-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div8-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div9-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div9-text"]}</div>
	  							<br/><h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div10-title"]}</h3><br/>
	  							<div className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id]["div10-text"]}</div>
	  						</div>
	  					</div>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default OfferingsComponent;