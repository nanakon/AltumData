import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import CustomButtonComponent from './CustomButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

class CorporateProgramComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {
	  	return (
	  		<div className="page dark-tint-overlay overflow-scroll" id="corporate-enablement-program-wrapper" style={{backgroundImage:'url(./pics/six_sigma.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  			<div id="corporate-enablement-program-content" style={{position:'relative'}}>
	  				<div className="page-title">{language_pack["homepage-block-buttons"]["corporate-enablement-program"]}</div>
	  				<div className="course-description-text">
	  					<div>{language_pack["corporate-enablement-program"]["description"]["div1-text"]}</div><br/>
	  					<div>{language_pack["corporate-enablement-program"]["description"]["div2-text"]}</div><br/>
	  					<div>{language_pack["corporate-enablement-program"]["description"]["div3-text"]}</div><br/>
	  				</div>
	  				<div className="offerings-buttons-wrapper">
	  					<table id="offerings-buttons-table">
	  						<tr>
		  						<td>
					  				<CustomButtonComponent destination="/corporate_program/lean_six_sigma" course="corporate-enablement-program" offering_id="offering-1" label="Lean Six Sigma"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/corporate_program/lean_training" course="corporate-enablement-program" offering_id="offering-2" label="Lean Training"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/corporate_program/strategy_and_change" course="corporate-enablement-program" offering_id="offering-3" label="Strategy & Change"/>
			  					</td>
		  					</tr>
		  					<tr>
								<td>
			  						<CustomButtonComponent destination="/corporate_program/building_high_performing_teams" course="corporate-enablement-program" offering_id="offering-4" label="Building High Performing Teams"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/corporate_program/agile" course="corporate-enablement-program" offering_id="offering-5" label="Agile"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent destination="/corporate_program/specialty_workshops" course="corporate-enablement-program" offering_id="offering-6" label="Specialty Workshops"/>
			  					</td>
		  					</tr>
	  					</table>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramComponent;