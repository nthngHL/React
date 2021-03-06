import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
	currentDialog: string | null
	clearCurrentDialogAC: () => void
	setCurrentPage: (currentPage: number) => void
}

const Navbar: React.FC<PropsType> = (props) => {
	let onClearCurDlg = () => {
		props.clearCurrentDialogAC();
	}

	let onClearUsersPage = () => {
		props.setCurrentPage(1);
	}

	return (
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}>
					<NavLink to='/profile' activeClassName={classes.active}>
						Profile
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to='/dialogs' activeClassName={classes.active} onClick={onClearCurDlg}>
						Messages
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to='/news' activeClassName={classes.active}>
						News
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to='/music' activeClassName={classes.active}>
						Music
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to='/settings' activeClassName={classes.active}>
						Settings
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to='/users' activeClassName={classes.active} onClick={onClearUsersPage}>
						Users
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;