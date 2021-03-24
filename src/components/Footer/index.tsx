import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
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
							<table>
								<tbody>
									<tr>
										<td>Office</td>
										<td>
											<a href="tel:+251-22-211-3961">
												+251-22-211-3961
											</a>
										</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>
											<a href="mailto:iapr@astu.edu.et">
												iapr@astu.edu.et
											</a>
										</td>
									</tr>
									<tr>
										<td>P.O.Box</td>
										<td> 1888 Adama, Ethiopia</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="addresses">
							<h4>Office of Registrar</h4>
							<table>
								<tbody>
									<tr>
										<td>Office</td>
										<td>
											<a href="tel:+251-221-100001">
												+251-221-100001
											</a>
										</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>
											<a href="mailto:sar@astu.edu.et">
												sar@astu.edu.et
											</a>
										</td>
									</tr>
									<tr>
										<td>P.O.Box</td>
										<td>1888 Adama, Ethiopia</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="social">
						<h5>Find us on Social Media</h5>
						<div className="social-media-list">
							<a href="https://www.facebook.com/adamaastu/">
								<FaFacebook />
							</a>
							<a href="http://www.twitter.com">
								<FaTwitter />
							</a>
							<a href="https://youtu.be/2Jmb5_d0m7Y">
								<FaYoutube />
							</a>
							<a href="http://www.linkdin.com">
								<FaLinkedin></FaLinkedin>
							</a>
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
