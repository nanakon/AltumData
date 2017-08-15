import React from 'react';

class LSSHomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="lss-right-column-wrapper">
	  			<div className="right-column-content">
	  				<div className="course-description">
	  					<h3 className="offering-description-title">
  							Lean Six Sigma Education Offerings
  						</h3><br/>
	  					<h3 className="offering-description-div">
	  						We provide Lean Six Sigma training for yellow belt, green belt, and black belt certifications.  All of our Lean Six Sigma courses follow the DMAIC (Define, Measure, Analyze, Improve, Control) methodology. Instruction includes all of the different tools, techniques and concepts related to Lean and Six Sigma.
  						</h3>
  						<h3 className="offering-description-div">
  							Students who successfully achieve certification are able to create positive change within their organization.
  						</h3>
  						<h3 className="offering-description-div">
  							Learn more about all of the training courses we offer and see how our approach can help you improve your problem-solving skills and help achieve your business goals. 
  						</h3>
  						<h3 className="offering-description-div">
  							We can also provide our Lean Six Sigma and Lean training onsite for businesses, as well as tailored programs to help your business achieve operational excellence and meet corporate goals.  Our team of experienced Black Belts and Master Black Belts have Extensive experience delivering quality training and coaching in over 15 countries with leading corporations.  Whether you are interested in on-site or online training, we have the training to help you succeed. Feel free to contact us directly
  						</h3>
	  				</div>
	  			</div>			
	  		</div>
	    );
  	}

}

export default LSSHomeComponent;