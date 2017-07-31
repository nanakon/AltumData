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
					  				<CustomButtonComponent destination="/cognitive_transformation/offering-1" course="it-cognitive-transformation-page" picture="chatbot.jpg" offering_id="offering-1" label={language_pack["it-cognitive-transformation-page"]["offering-1"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/cognitive_transformation/offering-2" course="it-cognitive-transformation-page" picture="smart_reader_2.png" offering_id="offering-2" label={language_pack["it-cognitive-transformation-page"]["offering-2"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/cognitive_transformation/offering-3" course="it-cognitive-transformation-page" picture="process_automation.jpg" offering_id="offering-3" label={language_pack["it-cognitive-transformation-page"]["offering-3"]["name"]}/>
			  					</td>
		  					</tr>
		  					<tr>
								<td>
			  						<CustomButtonComponent destination="/cognitive_transformation/offering-4" course="it-cognitive-transformation-page" picture="process_automation.jpg" offering_id="offering-4" label={language_pack["it-cognitive-transformation-page"]["offering-4"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/cognitive_transformation/offering-5" course="it-cognitive-transformation-page" picture="process_automation.jpg" offering_id="offering-5" label={language_pack["it-cognitive-transformation-page"]["offering-5"]["name"]}/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/cognitive_transformation/offering-6" course="it-cognitive-transformation-page" picture="data_architecture.jpg" offering_id="offering-6" label={language_pack["it-cognitive-transformation-page"]["offering-6"]["name"]}/>
			  					</td>
		  					</tr>
	  					</table>
	  				</div>

	  		</div>
	    );
  	}

}

export default CognitiveTransformationComponent;