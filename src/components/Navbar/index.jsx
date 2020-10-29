import React from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from 'components/LanguageButton';

const Navbar = ({ pages }) => {
	const links = pages.map((page) => {
		return (
			<li className="nav-item" style={{ margin: '10px' }}>
				<Link to={page.url} key={page.url} style={{ color: 'white' }}>
					{page.name}
				</Link>
			</li>
		);
	})

	return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<ul className="navbar-nav">
				{links}
			</ul>
			<LanguageButton />
		</nav>
	);
}

export default Navbar;