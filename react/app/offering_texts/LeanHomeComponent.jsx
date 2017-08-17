import React from 'react';

class LeanHomeComponent extends React.Component {
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
  							Lean
  						</h3><br/>
  						<h3 className="offering-description-div">
                Lean is a management philosophy and a powerful set of tools based on the Toyota Production System (TPS).  Its objective is to identify and eliminate waste (everything that does not add value in the eyes of the customer) from processes. 
  						</h3>
  						<h3 className="offering-description-div">
                Lean is a continuous improvement approach that improves both the operational efficiency and financial performance of a business.  When done right Lean changes organizations, delivering real results that sparks more transformations. 
  						</h3>
  						<h3 className="offering-description-div">
                While its roots are in manufacturing, today Lean thinking is applied to services, administrative functions, and across all industries. 
  						</h3>
	  					<h3 className="offering-description-div bold italic">
                Lean thinking provides fast and dramatic results. 
  						</h3>
	  				</div>
	  			</div>			
	  		</div>
	    );
  	}

}

export default LeanHomeComponent;