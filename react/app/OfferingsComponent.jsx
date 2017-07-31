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

		var items_to_render = [];

		for (var i=1; i<=10;i++) {
			var title_handle = "div"+i+"-title";
			var text_handle = "div"+i+"-text";

			if (language_pack[this.props.location.course][this.props.match.params.offering_id][title_handle] != "") {
				items_to_render.push(<br/>);
				items_to_render.push(<h3 className="offering-description-title">{language_pack[this.props.location.course][this.props.match.params.offering_id][title_handle]}</h3>);
				items_to_render.push(<br/>);
			};

			if (language_pack[this.props.location.course][this.props.match.params.offering_id][text_handle] != "") {
				items_to_render.push(<h3 className="offering-description-div">{language_pack[this.props.location.course][this.props.match.params.offering_id][text_handle]}</h3>);
			};
		};

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
	  							{items_to_render}
	  						</div>
	  					</div>
	  					<br/><img id="tiny-logo" src="./pics/logo_3.png"/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default OfferingsComponent;