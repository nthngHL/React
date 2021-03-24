import SashaAva from '../components/Dialogs/img/SashaAva.jpg';
import LeraAva from '../components/Dialogs/img/LeraAva.jpg';
import NastyaAva from '../components/Dialogs/img/NastyaAva.jpg';
import LenaAva from '../components/Dialogs/img/LenaAva.jpg';
import KristinaAva from '../components/Dialogs/img/KristinaAva.jpg';
import TanyaAva from '../components/Dialogs/img/TanyaAva.jpg';

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND-MESSAGE';
let SET_CURRENT_DIALOG = 'SET-CURRENT-DIALOG';

let initialState = {
	newMessageBody: 'text for msg',
	currentDialog: null,
	dialogs: [{
			id: 1,
			name: 'Sasha',
			ava: SashaAva,
			msgs: [{
					id: 1,
					text: 'Hi, my name is Sasha',
					out: false
				},
				{
					id: 2,
					text: 'Short Message',
					out: true
				},
				{
					id: 3,
					text: 'Can I meet you?',
					out: false
				},
				{
					id: 4,
					text: 'Short Message',
					out: true
				},
				{
					id: 5,
					text: 'Can I meet you?',
					out: false
				},
				{
					id: 6,
					text: 'Short Message',
					out: true
				},
				{
					id: 7,
					text: 'Can I meet you?',
					out: false
				},
				{
					id: 8,
					text: 'Short Message',
					out: true
				},
				{
					id: 9,
					text: 'Can I meet you?',
					out: false
				},
				{
					id: 10,
					text: 'Short Message',
					out: true
				},
				{
					id: 11,
					text: 'Can I meet you?',
					out: false
				},
				{
					id: 12,
					text: 'I don\'t know',
					out: true
				},
				{
					id: 13,
					text: 'Lorem ipsum pipsum blablabla',
					out: false
				},
				{
					id: 14,
					text: 'Ok',
					out: false
				},
			]
		},
		{
			id: 2,
			name: 'Lera',
			ava: LeraAva,
			msgs: [{
					id: 1,
					text: 'Hi, I want you',
					out: false
				},
				{
					id: 2,
					text: 'I want you too',
					out: true
				},
				{
					id: 3,
					text: 'I wanna be tohether with you',
					out: false
				},
				{
					id: 4,
					text: 'One more message',
					out: false
				},
				{
					id: 5,
					text: 'Can we meet one another tomorrow?',
					out: false
				}
			]
		},
		{
			id: 3,
			name: 'Nastya',
			ava: NastyaAva,
			msgs: [{
					id: 1,
					text: 'Hi, I have waited for you so long',
					out: false
				},
				{
					id: 2,
					text: 'I miss you',
					out: false
				},
			]
		},
		{
			id: 4,
			name: 'Lena',
			ava: LenaAva,
			msgs: [{
					id: 1,
					text: 'Hi',
					out: false
				},
				{
					id: 2,
					text: 'My name is Lena',
					out: false
				},
				{
					id: 3,
					text: 'HRU',
					out: false
				},
				{
					id: 4,
					text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
								Ea eum necessitatibus impedit qui aperiam pariatur 
								repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
								voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.`,
					out: true
				},
			]
		},
		{
			id: 5,
			name: 'Kristina',
			ava: KristinaAva,
			msgs: [{
					id: 1,
					text: 'Hi, Ian',
					out: false
				},
				{
					id: 2,
					text: 'Hi, Kristina',
					out: true
				},
				{
					id: 3,
					text: 'Let\'s go walking outside ',
					out: true
				},
				{
					id: 4,
					text: `
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
										Ea eum necessitatibus impedit qui aperiam pariatur 
										repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
										voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
									`,
					out: false
				},
				{
					id: 5,
					text: 'U have good name',
					out: false
				},
				{
					id: 6,
					text: 'I like it',
					out: false
				},
				{
					id: 7,
					text: 'I like it',
					out: false
				},
				{
					id: 8,
					text: 'Where are you from?',
					out: false
				},
				{
					id: 9,
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
					out: true
				},
				{
					id: 10,
					text: 'Ea eum necessitatibus impedit qui aperiam pariatur ',
					out: false
				},
				{
					id: 11,
					text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum',
					out: true
				},
				{
					id: 12,
					text: 'voluptatum ratione itaque nemo ut officia aut odit fuga quisquam. ',
					out: false
				},
				{
					id: 13,
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
					out: true
				},
				{
					id: 14,
					text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum, voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.',
					out: false
				},
			]
		},
		{
			id: 6,
			name: 'Tanya',
			ava: TanyaAva,
			msgs: [{
					id: 1,
					text: 'Hi, I have waited for you so long',
					out: true
				},
				{
					id: 2,
					text: 'I wanna see u',
					out: true
				},
				{
					id: 3,
					text: 'I wanna see u',
					out: true
				},
			]
		}
	]
};


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let currentDlg = state.dialogs.filter(dialog => dialog.name == state.currentDialog);
			let msgs = currentDlg[0].msgs;
			let msgId = msgs.length;
			// последий элемент - это длина минус 1, а айди - это последний элемент плюс 1
			// поэтому единицу решил лишний раз не отнимать, чтобы потом не прибавлять

			currentDlg[0].msgs.push({
				id: msgId,
				text: state.newMessageBody,
				out: true
			});

			return {
				...state,
				newMessageBody: '',
			};
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.msgBody
			};
		case SET_CURRENT_DIALOG:
			return {
				...state,
				currentDialog: action.dialog
			}
			default:
				return state;
	}

}


export const sendMessageAC = () => ({
	type: SEND_MESSAGE
})
export const updateNewMsgTextAC = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	msgBody: body
})

export const setCurrentDialogAC = (dialog) => ({
	type: SET_CURRENT_DIALOG,
	dialog
})

export default dialogsReducer;