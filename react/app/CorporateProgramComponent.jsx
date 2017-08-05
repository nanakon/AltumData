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
	  		<div className="page" id="corporate-enablement-program-page">
	  			<div style={{position:'relative'}}>
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
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING1 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING2 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING3 NAME#"/>
			  					</td>
		  					</tr>
		  					<tr>
								<td>
			  						<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING4 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING5 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING6 NAME#"/>
			  					</td>
		  					</tr>
		  					<tr>
		  						<td>
			  						<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING7 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING8 NAME#"/>
					  			</td>
					  			<td>
					  				<CustomButtonComponent go_to_page={this.props.go_to_page} destination="dummy_offering" label="#OFFERING9 NAME#"/>
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