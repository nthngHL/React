import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './logo.png';
import { Redirect } from 'react-router-dom';
// import Login from '../Login/Login'

const Header = (props) => {

	return (
		<header className={classes.header}>
			<img src={logo} />
			<div className={classes.loginBlock}>
				{props.isAuth ?
					<div>
						<span className={classes.userName}>{props.login}</span>
						<button className={classes.logOutBtn} onClick={props.logout}>Log out</button>
					</div>
					: <NavLink to={'/login'} className={classes.login}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;