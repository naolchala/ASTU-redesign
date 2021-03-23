import React from "react";
import { MdChevronRight } from "react-icons/md";

const Home = () => {
	return (
		<>
			<div className="hero">
				<h1 className="title">
					Adama Science and Technology University
				</h1>
				<h4 className="subtitle">
					We are dedicated to Innovative Education
				</h4>
				<button className="goto-action">
					Get Started <MdChevronRight />
				</button>

				<div className="scroll-down-indicator">
					<MdChevronRight className="down-arrow"></MdChevronRight>
				</div>
			</div>
			<div className="missions">
				<article>
					<h3 className="title">Vision</h3>
					<p>
						ASTU aspires to be the first choice in Ethiopia and the
						premier center of excellence in applied science and
						technology in Africa by 2030.
					</p>
				</article>

				<article>
					<h3 className="title">Mission</h3>
					<p>
						The mission of ASTU is to provide ethical and competent
						graduates in applied science and technology through
						quality education, demand driven research and community
						service. ASTU also provides innovative knowledge to
						support the socio-economic development of the nation.
					</p>
				</article>
				<article>
					<h3 className="title">Core Values</h3>

					<ul>
						<li>Originality and Innovativeness</li>
						<li>Academic freedom and integrity</li>
						<li>Sense of belongingness and ownership</li>
						<li>Nurturing diversity</li>
						<li>Transparency and accountability</li>
						<li>Professional ethics</li>
						<li>Responsiveness</li>
					</ul>
				</article>
			</div>
			<div className="counters">
				<section className="count">
					<h3>200,000+</h3>
					<h4>Students</h4>
				</section>
				<section className="count">
					<h3>1,000+</h3>
					<h4>Professors</h4>
				</section>

				<section className="count">
					<h3>19</h3>
					<h4>Study Fields</h4>
				</section>
				<section className="count">
					<h3>5</h3>
					<h4>Schools</h4>
				</section>
			</div>
		</>
	);
};
export { Home };
