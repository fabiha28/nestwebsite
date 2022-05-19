import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Link from 'next/link';
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

class CourseSidebar extends Component {
    constructor(props) {
		super(props);
        console.log(props);
	}
    
    state = {
        open: false
      };
    
    onOpenModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    onCloseModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    addToCart = (item) => {
        fetch(`http://localhost/lmsapi/public/api/add/cart`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
            body: JSON.stringify({
                "course_id": item.id,
                "division_id": 0,
                "subject_id": 0,
                "exam_id": 0,
                "price": item.price,
                "discount": item.discount,
                "total": item.price - (item.price * item.discount / 100),
                "coupon": ""
            })
		})
		.then((res) => res.json())
		.then((json) => {
           console.log(json);
		})	
    }
    render() {

        return (
            <React.Fragment>
                <Modal
                open={this.state.open}
                onClose={this.onCloseModal}
                styles={{
                modal: {
                    maxWidth: "unset",
                    width: "70%",
                    padding: "unset"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                },
                closeButton: {
                    background: "yellow"
                }
                }}
                center
            >
                <ReactPlayer
                url="https://youtu.be/es4x5R-rV9s"
                width="100%"
                height="calc(100vh - 100px)"
                />
            </Modal>
            
            <div className="course__sidebar pl-70 p-relative">
                <div className="course__shape">
                <img className="course-dot" src="assets/img/course/course-dot.png" alt="img not found"/>
                </div>
                <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__video">
                <div className="course__video-thumb w-img mb-25">
                    <img src="assets/img/course/video/course-video.jpg" alt="img not found"/>
                    <div className="course__video-play"> 
                        <a href="#!" className="play-btn" onClick={this.onOpenModal}> <i><FontAwesomeIcon icon={['fas', 'play']} /></i> </a>
                    </div>
                </div>
                    <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                        <div className="course__video-price">
                            <h5>{this.props.items[0]['Course'].currency}{this.props.items[0]['Course'].price - (this.props.items[0]['Course'].price * this.props.items[0]['Course'].discount / 100)} </h5>
                            <h5 className="old-price">{this.props.items[0]['Course'].currency}{this.props.items[0]['Course'].price}</h5>
                        </div>
                        <div className="course__video-discount">
                            <span>{this.props.items[0]['Course'].discount}% OFF</span>
                        </div>
                    </div>
                    <div className="course__video-content mb-35">
                        <ul>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                                <i><FontAwesomeIcon icon={['fas', 'home']} /></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Instructor :</span> Eleanor Fant</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                                <i><FontAwesomeIcon icon={['fas', 'book']} /></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Lectures :</span>14</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                                <i><FontAwesomeIcon icon={['fas', 'clock']} /></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Duration :</span>6 weeks</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                                <i><FontAwesomeIcon icon={['fas', 'user']} /></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Enrolled :</span>{this.props.items[0]['Course'].students_enrolled} students</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon">
                                <i><FontAwesomeIcon icon={['fas', 'globe']} /></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Language :</span>{this.props.items[0]['Course'].language}</h5>
                            </div>
                            </li>                        
                        </ul>
                    </div>
                    <div className="course__payment mb-35">
                        <h3>Payment:</h3>
                        <a href="#">
                            <img src="assets/img/course/payment/payment-1.png" alt="img not found"/>
                        </a>
                    </div>
                    <div className="course__enroll-btn">
                       <a onClick={() => this.addToCart(this.props.items[0]['Course'])} className="e-btn e-btn-7 w-100">Enroll <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i></a>
                    </div>
                </div>
                </div>
                <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__sidebar-course">
                    <h3 className="course__sidebar-title">Related courses</h3>
                    <ul>
                        <li>
                            <div className="course__sm d-flex align-items-center mb-30">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-grid"><a><img src="assets/img/course/sm/course-sm-1.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-grid"><a>Development</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>$54.00</span>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="course__sm d-flex align-items-center mb-30">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-grid"><a><img src="assets/img/course/sm/course-sm-2.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-grid"><a>Data Science</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>$72.00</span>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="course__sm d-flex align-items-center mb-10">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-grid"><a><img src="assets/img/course/sm/course-sm-3.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                        <li><a href="#"> <i><FontAwesomeIcon icon={['fas', 'star']} /></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-grid"><a>UX Design</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>Free</span>
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default CourseSidebar;