import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import CustomButtonComponent from './CustomButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

class CognitiveTransformationComponent extends React.Component {
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
	  				<div className="page-title">{language_pack["homepage-block-buttons"]["it-cognitive-transformation"]}</div>
	  			</div>	
	  			<div className="course-description-text">{language_pack["it-cognitive-transformation-page"]["description"]}</div><br/>
	  			<div className="course-description-text-note">{language_pack["it-cognitive-transformation-page"]["description-note"]}</div>
	  			
	  			<div className="offerings-buttons-wrapper">
	  					<table id="offerings-buttons-table">
	  						<tr>
		  						<td>
					  				<CustomButtonComponent destination="OfferingsComponent" label={language_pack["it-cognitive-transformation-page"]["offering-1"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="dummy_offering" label={language_pack["it-cognitive-transformation-page"]["offering-2"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="dummy_offering" label={language_pack["it-cognitive-transformation-page"]["offering-3"]["name"]}/>
			  					</td>
		  					</tr>
		  					<tr>
								<td>
			  						<CustomButtonComponent destination="dummy_offering" label={language_pack["it-cognitive-transformation-page"]["offering-4"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="dummy_offering" label={language_pack["it-cognitive-transformation-page"]["offering-5"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="dummy_offering" label={language_pack["it-cognitive-transformation-page"]["offering-6"]["name"]}/>
			  					</td>
		  					</tr>
	  					</table>
	  				</div>

	  		</div>
	    );
  	}

}

export default CognitiveTransformationComponent;