import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className='wrapper'>

				<HeaderContainer/>
				<Navbar />

				<div className='content-wrapper'>
					< Route path = '/profile/:userId?'
					render = {
						() => <ProfileContainer/>
					}
					/>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/news' render={ () => <News/>}/>
					<Route path='/music' render={ () => <Music/>}/>
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/users' render={() => <UsersContainer/>} />
				</div>
				
			</div>
		</BrowserRouter>
	);
}


export default App;
