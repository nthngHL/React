import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {

	return (
		<div className={classes.profile__content}>
			<img className={classes.content__img} src='https://www.aeroflot.ru/media/aflfiles/by/msq/msq_2.jpg'/>
				<div>Status, discription, status, discription</div>
			<MyPosts
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
				// addPost={props.addPost}
				// updateNewPostText={props.updateNewPostText}
			/>
			</div>
	)
}

export default Profile;