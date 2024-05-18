import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="little_cesars.png"
								alt="little_Ceasars"
								className="work-image"
							/>
							<div className="work-title">Little Ceasars</div>
							<div className="work-subtitle">
								Assistant Manager
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
