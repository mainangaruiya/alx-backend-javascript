//import classRoom from 0-classroom.js
import classRoom from './0-classroom.js';

export default function initializeRoomms(){
	const classrooms = [
		new ClassRoom(19),
		new ClassRoom(20),
		new ClassRoom(34),
		];
	return classrooms;
}