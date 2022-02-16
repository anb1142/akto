import "@styles/components/Nav.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.onscroll = () =>
			(window.innerHeight / 100) * 6.7 < window.pageYOffset ? setScrolled(true) : setScrolled(false);
	}, []);

	return (
		<nav className={scrolled ? "scrolled" : ""}>
			<div>
				<NavLink to="/"> </NavLink>
			</div>
			<ul>
				<NavLink to="/about">about</NavLink>
				<NavLink to="/promises">our promise</NavLink>
				<NavLink to="/process">our process</NavLink>
				<NavLink to="/solutions" end>
					solutions
				</NavLink>
				<NavLink to="/careers">careers</NavLink>
			</ul>
			<NavLink to="/letstalk">let's talk</NavLink>
		</nav>
	);
};
export default Nav;
