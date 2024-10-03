import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Student from "./pages/creation/Student.jsx";
import StudentsContexts from "./contexts/StudentsContext.jsx";
import { useState, useEffect } from "react";
import CoursesContext from "./contexts/CoursesContext.jsx";
import FetchCourses from "./tools/FetchCourses.jsx";
import FetchStudents from "./tools/FetchStudents.jsx";

const mockStudents = [
	{
		created_at: "12032021",
		student_id: 4,
		student_name: "denis",
		student_lastname: "rocha",
		student_birthday: "15/03/2001",
		student_cpf: "04979977030",
		student_gender: "Masculino",
		student_email: "denischarocha@gmail.com",
		student_cep: "97015560",
		student_country: "Brasil",
		student_street: "Rua raposo tavares",
		student_neighborhood: "Nossa senhora de fátima",
		student_number: "140",
		student_complement: "APT 401",
		student_city: "Santa Maria",
		student_state: "Rio grande do sul",
		student_courses: [
			{
				studentsCourses_id: 1,
				student_id: 4,
				course_id: 1,
				course_conclusion_date: "02/10/2024"
			}
		]
	}
];
const mockCourses = [
	{
		course_id: 1,
		course_name: "Fullstack"
	}
];

function App() {
	const [students, setStudents] = useState(mockStudents);
	const [courses, setCourses] = useState(mockCourses);
	useEffect(() => {
		// FetchCourses(setCourses);
		// FetchStudents(setStudents, courses);
	}, [students, courses])

	return (
		<>
			<CoursesContext.Provider value={{ courses, setCourses }}>
				<StudentsContexts.Provider value={{ students, setStudents }}>
					<Router>
						<Routes>
							<Route path="/" Component={Home} />
							<Route path="/student" Component={Student} />
						</Routes>
					</Router>
				</StudentsContexts.Provider>
			</ CoursesContext.Provider>
		</>
	)
}

export default App
