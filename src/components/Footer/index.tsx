import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="quicklinks">
				<section>
					<h3 className="title">Quick links</h3>
					<div className="">
						<Link to="/">Home</Link>
						<Link to="/">ASTU E-Learning Portal</Link>
						<Link to="/">ASTU Digital Library</Link>
						<Link to="/">ASTU STEM Center</Link>
						<Link to="/">ASTU Notice Board</Link>
						<Link to="/">ASTU EDCF Project</Link>
						<Link to="/"></Link>
					</div>
				</section>
				<section className="contact">
					<h3 className="title">Contact Us</h3>
					<div className="info">
						<h4>
							International Relations and Corporate Communications
						</h4>
						<div className="addresses">
							<span>
								Office:{" "}
								<a href="tel:+251-22-211-3961">
									+251-22-211-3961
								</a>
							</span>
							<span>
								Email:{" "}
								<a href="mailto:iapr@astu.edu.et">
									iapr@astu.edu.et
								</a>
							</span>
							<span>P.O.Box: 1888 Adama, Ethiopia</span>
						</div>
						<h4>Office of Registrar</h4>
						<div className="addresses">
							<span>
								Office:{" "}
								<a href="tel:+251-221-100001">
									+251-221-100001
								</a>
							</span>
							<span>
								Email:{" "}
								<a href="mailto:sar@astu.edu.et">
									sar@astu.edu.et
								</a>
							</span>
							<span>P.O.Box: 1888 Adama, Ethiopia</span>
						</div>
					</div>
				</section>
			</div>
			<div className="yearHolder">
				<span>{new Date().getFullYear()}</span>
				<span>
					<sup> &copy;</sup> Adama Science and Technology University
				</span>
			</div>
		</div>
	);
};

export { Footer };
