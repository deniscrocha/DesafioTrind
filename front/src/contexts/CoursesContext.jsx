import { createContext } from "react";

const CoursesContext = createContext({
	courses: [],
	setCourses: () =>{}
});

export default CoursesContext;
