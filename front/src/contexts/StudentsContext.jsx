import { createContext } from "react";

const StudentsContexts = createContext({
	students: [],
	setStudents: () =>{}
});

export default StudentsContexts;
