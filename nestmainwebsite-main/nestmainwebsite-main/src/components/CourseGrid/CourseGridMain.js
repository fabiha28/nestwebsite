import React, { Component, useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CourseGridTab from '../Elements/Tab/CourseGridTab';
import Cta from '../Home/CtaSection';


class CourseGridMain extends Component {
	// Constructor 
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	componentDidMount() {
		// call api or anything
		console.log("Component has been rendered");
		fetch('http://localhost/lmsapi/public/api/courses', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items: json,
				DataisLoaded: true
			});
		})		
	}
    render() {
		const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb />
				{/* breadcrumb-end */}

                {/* course tab-start */}
				<CourseGridTab items={items} />
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default CourseGridMain;