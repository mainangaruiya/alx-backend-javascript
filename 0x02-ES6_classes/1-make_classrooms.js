//import classRoom from 0-classroom.js
import classRoom from './0-classroom.js';
function initializeRoomms(){
	const rooms = [
		new ClassRoom(19),
		new ClassRoom(20),
		new ClassRoom(34),
		];
	return rooms;
}
export default initializeRoomms;