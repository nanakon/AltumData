import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import OfferingExampleComponent from './OfferingExampleComponent.jsx';

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

		var picture_map = {
			"offering-1": "chatbot_2.jpg",
		};
		var items_to_render = [];

		for (var i=1; i<=10;i++) {
			var title_handle = "div"+i+"-title";
			var text_handle = "div"+i+"-text";

			if (language_pack[this.props.course][this.props.match.params.offering_id][title_handle] != "") {
				items_to_render.push(<br/>);
				items_to_render.push(<h3 className="offering-description-title">{language_pack[this.props.course][this.props.match.params.offering_id][title_handle]}</h3>);
				items_to_render.push(<br/>);
			};

			if (language_pack[this.props.course][this.props.match.params.offering_id][text_handle] != "") {
				items_to_render.push(<h3 className="offering-description-div">{language_pack[this.props.course][this.props.match.params.offering_id][text_handle]}</h3>);
			};
		};

		//		<img id="offering-pic" src={"./pics/"+picture_map[this.props.match.params.offering_id]}/>
	  	//		<img id="offering-pic-mobile" src={"./pics/landscape_"+picture_map[this.props.match.params.offering_id]}/>
	  		

		var background_image_path = "./pics/"+picture_map[this.props.match.params.offering_id]

	  	return (
	  		<div className="page" id="team-page">
	  			<div style={{position:'relative'}}>
	  				<div className="left-column" style={{backgroundImage:'url('+background_image_path+')', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  					<div className="page-title" id="offering-title">{language_pack[this.props.course][this.props.match.params.offering_id]["name"]}</div>
	  				</div>
	  				<div className="right-column">
	  					<div className="right-column-content">
	  						<div className="course-description">
	  							{items_to_render}
	  						</div>
	  						<br/>
	  						<div className="examples-wrapper">
	  							<OfferingExampleComponent course={this.props.course} offering_id={this.props.match.params.offering_id}/>
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