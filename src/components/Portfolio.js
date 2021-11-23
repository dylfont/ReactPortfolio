import React from 'react';
import Project from './Project';

function Portfolio() {
	const projects = [
		{
			name: 'cryptoxchange',
			description:
				'Convert top world currencies to other top world cryptocurrencies.',
			image: 'cryptoXchange.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Bootstrap',
				'jQuery',
			],
			github: 'https://github.com/BaileyB227/cryptoXchange',
			deployed: 'https://baileyb227.github.io/cryptoXchange/',
		},
		{
			name: 'Progressive Budget',
			description:
				'Track your finances with this budget tool.',
			image: 'ProgressiveBudget.png',
			technologies: [
				'Webmanifest',
				'JavaScript',
				'Service-Worker'
			],
			github: 'https://github.com/dylfont/ProgressiveBudget',
			deployed: 'https://progressive-budget-djf.herokuapp.com/',
		},
		{
			name: 'Day Planner',
			description:
				'Plan out your day with this day planner.',
			image: 'DayPlanner.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Bootstrap',
			],
			github: 'https://github.com/dylfont/DayPlanner',
			deployed: 'https://dylfont.github.io/DayPlanner/',
		},
		{
			name: 'Note Taker',
			description:
				'Take, save, and delete notes with this useful tool.',
			image: 'NoteTaker.png',
			technologies: [
				'JavaScript',
				'HTML',
				'Express',
				'CSS',
			],
			github: 'https://github.com/dylfont/NoteTaker',
			deployed: 'https://note-taker-djf.herokuapp.com/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;