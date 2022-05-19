import React, { Component } from 'react';
import { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


class MyCart extends Component {
    constructor(props) {
		super(props);
      	this.state = {
        	items: [],
			DataisLoaded: false,
            total: 0
		};
       
	}
    componentDidMount() {
		// call api to get courses
		fetch(`http://localhost/lmsapi/public/api/view/cart`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((res) => res.json())
		.then((json) => {
            console.log(json);
            const result = json.reduce((total, currentValue) => total = total + currentValue.total,0);
         
			this.setState({
				items: json,
				DataisLoaded: true,
                total: result
			});
		})		
	}

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="My Cart" />
				{/* breadcrumb-end */}

                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>                                    
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.items.map((item) => ( 
                          
                                            <tr>
                                                <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/course/sm/cart-2.jpg"  alt="img not found"/></a></Link></td>
                                                <td className="product-name">                                                    
                                                    
                                                        {item.course_id > 0 ? <>
                                                           <Link href="/course-details/${item.course.id}"><a>
                                                            {item.course.name}
                                                            </a></Link>
                                                        </> : item.division_id > 0 ? <>
                                                           <Link href="/course-details"><a>
                                                            {item.division.name}
                                                            </a></Link>
                                                        </>  :item.subject_id > 0 ? <>
                                                           <Link href="/course-details"><a>
                                                            {item.subject.name}
                                                            </a></Link>
                                                        </> : item.exam_id > 0 ? <>
                                                           <Link href="/course-details"><a>
                                                            {item.exam.name}
                                                            </a></Link>
                                                        </>: null } 
                                                    
                                                </td>
                                                <td className="product-price"><span className="amount">{item.currency}{item.total}</span></td>
                                                <td className="product-remove"><a href="#"><i><FontAwesomeIcon icon={['fas', 'times']} /></i></a></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                               
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul className="mb-20">
                                                <li>Subtotal <span>$250.00</span></li>
                                                <li>Total <span>$250.00</span></li>
                                            </ul>
                                            <Link href="/checkout"><a className="e-btn e-btn-border">Proceed to checkout</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        	</main>
        );
    }
}

export default MyCart;