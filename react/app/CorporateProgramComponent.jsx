import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import CustomButtonComponent from './CustomButtonComponent.jsx';


class CorporateProgramComponent extends React.Component {
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
	  				<div id="homepage-title">CORPORATE ENABLEMENT PROGRAM</div>
	  				<div className="course-description-text">#Descriptory text of this course#</div>
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
	  				<div style={{marginTop:'5%', color:'orange'}}>//There will be as many buttons as there are offerings obviously, the final arangement will depend on how many buttons there are</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramComponent;