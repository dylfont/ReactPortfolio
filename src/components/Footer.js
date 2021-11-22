import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/dylfont"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/GitHub-Mark.png").default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/dylan-fontenot-248a67213/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/768px-LinkedIn_logo_initials.png").default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href = "mailto:dylanfontenot@protonmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/protonmail-logo-square.png").default}
						alt="ProtonMail"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;