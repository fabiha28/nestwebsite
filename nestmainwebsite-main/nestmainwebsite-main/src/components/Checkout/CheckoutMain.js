import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CheckoutPayment from '../Elements/Accordion/CheckoutPayment';

class CheckoutMain extends Component {
    
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
				<Breadcrumb pageTitle="Checkout" />
				{/* breadcrumb-end */}

                <section className="checkout-area pb-70">
                    <div className="container">
                        <form action="#">
                            <div className="row">                              
                                <div className="col-lg-6">
                                    <div className="your-order mb-30 ">
                                        <h3>Your order</h3>
                                        <div className="your-order-table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                            this.state.items.map((item) => ( 
                          
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                        {item.course_id > 0 ? <>
                                                            {item.course.name}
                                                        </> : item.division_id > 0 ? <>
                                                            {item.division.name}
                                                        </>  :item.subject_id > 0 ? <>
                                                             {item.subject.name}                                                      
                                                        </> : item.exam_id > 0 ? <>                                                           
                                                            {item.exam.name}                                                         
                                                        </>: null }
                                                           
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">{item.currency}{item.total}</span>
                                                        </td>
                                                    </tr>
                                            ))
                                            }
                                                   
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">   {this.state.total}</span></td>
                                                    </tr>
                                                    
                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">  {this.state.total}</span></strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="payment-method">
                                            <CheckoutPayment />
                                            <div className="order-button-payment mt-20">
                                                <button type="submit" className="e-btn e-btn-border">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

        	</main>
        );
    }
}

export default CheckoutMain;