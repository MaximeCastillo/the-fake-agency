import React from 'react';
import { Link } from 'react-router-dom';
import fr_flag from 'assets/images/fr_flag.png';

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
			<img src={fr_flag} alt="drapeau français" />
		</nav>
	);
}

export default Navbar;