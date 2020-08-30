import React from 'react'
import "./membership.css"
import {Card, Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Regular from './CheckoutComponents/RegularCheckout.js'
import FACULTY_ALUMNI from './CheckoutComponents/FacultyCheckout.js'

class Membership extends React.Component {

	componentDidUpdate() {
		window.scrollTo(0, 0);
	  }

	//   constructor(props) {
	// 	super(props)
	// 	this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
	//   }
	
	//   componentDidMount() {
	// 	const handler = e => this.setState({matches: e.matches});
	// 	window.matchMedia("(min-width: 768px)").addListener(handler);
	//   }

	render() {
		return (
			<div id="membership-body">
				<div className="default-padding-top" >
					<div className="card">
						<center>
						<div className="carousel_container" style={{display: 'flex', justifyContent: 'center'}}>
							<Carousel>
								<Carousel.Item>
									<img
									// className="d-block image"
									className="image"
									src={require('./images/jpl-tour.png')} fluid
									alt="ACM Cal State LA members touring JPL"
									/>
								</Carousel.Item>
								{/* <Carousel.Item>
									<img
									// className="d-block image"
									className="image"
									src={require('./images/trophy.png')} fluid
									alt="Trophy award to ACM Cal State LA for best Student Organization Of the Year"
									/>
								</Carousel.Item> */}
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/space-invaders.png')} fluid
								alt="ACM Cal State LA Space Invaders Workshop"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/accord-workshop.png')} fluid
								alt="ACM Cal State LA Accord Workshop"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/hackathon.png')} fluid
								alt="ACM Cal State LA Hackathon"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								// className="d-block image"
								className="image"
								src={require('./images/movie-fundraiser.png')} fluid
								alt="ACM Cal State LA Movie Fundraiser"
								/>
							</Carousel.Item>
							</Carousel>
						</div>
						</center>
						<Accordion>
						{/* <Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="gold" style={{fontSize: "30px"}}
							className="highlight-text">
							<b>Gold</b>
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="gold">
							<Card.Body  style={{backgroundColor: "#161616"}}>
								<Gold/>
							</Card.Body>
							</Accordion.Collapse>
						</Card> */}
						<Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="regular" style={{fontSize: "27px"}}
							className="highlight-text">
							Regular
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="regular">
							<Card.Body  style={{backgroundColor: "#424242"}}>
								<Regular/>
							</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header style={{backgroundColor: "#000000"}}>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="faculty/alumni" style={{fontSize: "27px"}}
							className="highlight-text">
							Faculty/Alumni
							</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="faculty/alumni">
							<Card.Body  style={{backgroundColor: "#424242"}}>
								<FACULTY_ALUMNI/>
							</Card.Body>
							</Accordion.Collapse>
						</Card>
						</Accordion>
						<br></br>
					</div>
					<div class="quote-style-2 membership-footer-text">
						<span
							className="highlight-text"><i>Thank you for your support!</i></span>
						<br></br>
						<div className="membership-text">
							You're done! Expect to hear from us!
								</div><br></br>
					</div>
				</div>
			</div>
		)
	}
}

export default Membership;
