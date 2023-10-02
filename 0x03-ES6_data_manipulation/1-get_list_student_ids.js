//def fn
const getListStudentIds = (myArray) => {
	//check if array and retun empty array if not array
	if (!Array.isArray(myArray)){
		return [];
	}
	//if args is arry map transform it and extract id property
	return myArray.map((student) => student.id);
};

export default getListStudentIds; 